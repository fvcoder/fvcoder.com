import { Button, cn } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { eachDayOfInterval, eachWeekOfInterval, endOfWeek, getMonth, isEqual, parseISO, startOfWeek } from "date-fns";
import { a, div } from "framer-motion/client";

interface Activity {
  date: string
  count: number
  level: number
}

export type ContributionData = {
  total: Record<string, number>
  contributions: Array<Activity>
}

interface MonthLabel {
  weekIndex: number;
  label: string;
}

const labelsData = {
    months: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ],
    weekdays: [
      'Dom',
      'Lun',
      'Mar',
      'Mie',
      'Jue',
      'Vie',
      'Sab',
    ],
    totalCount: '{{count}} contribuciones en {{year}}',
    legend: {
      less: 'Menos',
      more: 'Mas',
    },
};

function getYearDateStatEnd(year: number) {
  const startYear = new Date(year, 0, 1);
  const endYear = new Date(year, 11, 31);

  return {
    startYear,
    endYear,
  };
}
function normalizeActivity(activity: Array<Activity>, year: number) {
  const { startYear, endYear } = getYearDateStatEnd(year);
  return eachDayOfInterval({
    start: startYear,
    end: endYear
  }).map(x => {
    const atv = activity.find(y => y.date === x.toISOString().split('T')[0]);
    if (!atv) {
      return {
        date: x.toISOString().split('T')[0],
        count: 0,
        level: 0
      }
    }
    return atv;
  })

}

function GraphGrid(props: { year: number, activity: Activity[] }) {
  const atvMap = new Map()
  const activity = normalizeActivity(props.activity, props.year);
  activity.forEach(x => {
    atvMap.set(x.date, x)
  })
  const weeks = eachWeekOfInterval({
    start: new Date(props.year, 0, 1),
    end: new Date(props.year, 11, 31)
  });;
  const weeksActivity = weeks.map((x) => {
    const days = eachDayOfInterval({
      start: startOfWeek(x),
      end: endOfWeek(x)
    })

    return days.map(x => {
      return atvMap.has(x.toISOString().split('T')[0]) ? atvMap.get(x.toISOString().split('T')[0]) : undefined
    })
  })

  
  return (
    <>
      <div className="grid grid-cols-12 gap-2 py-2">
        {labelsData.months.map((x, i) => (
          <div key={`graph-label-${i}`} className="text-xs text-zinc-500">{x}</div>
        ))}
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
        {weeksActivity.map((atv, i) => (
          <div key={`graph-grid-${i}`}>
            {atv.map((y, iw) => {
              return (
                <div
                key={`graph-grid-${i}-${iw}`}
                data-count={y?.count}
                className={cn("size-3 mb-1 rounded-sm", {
                  "bg-green-500/20": y?.level === 0,
                  "bg-green-500/40": y?.level === 1,
                  "bg-green-500/60": y?.level === 2,
                  "bg-green-500/80": y?.level === 3,
                  "bg-green-500": y?.level === 4,
                  "bg-transparent": !y
                })} />
              )
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function Graph({ data, yearSelected }: { data: ContributionData['contributions'], yearSelected: number }) {
  const currentYear = Number(yearSelected);
  const mainRef = useRef<HTMLDivElement>(null);
  const activity = normalizeActivity(data, currentYear);

  return (
    <article className="flex flex-col gap-y-2 text-sm">
      <main ref={mainRef}>
        <GraphGrid year={currentYear} activity={activity} />
      </main>
      <footer className="flex justify-between items-center">
        <div>{data.length} contribuciones en {currentYear}</div>
        <div className="flex items-center gap-1">
          <span className="block mr-1">Menos</span>
          <div className="size-3 bg-green-500/20 rounded" />
          <div className="size-3 bg-green-500/40 rounded" />
          <div className="size-3 bg-green-500/60 rounded" />
          <div className="size-3 bg-green-500/80 rounded" />
          <div className="size-3 bg-green-500 rounded" />
          <span className="block ml-1">Mas</span>
        </div>
      </footer>
    </article>
  )
}

export function ContributionGraph() {
  const [data, setData] = useState<ContributionData | undefined>(undefined)
  const [year, setYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const dataYear = data?.contributions.filter((contribution) => contribution.date.startsWith(`${year}-`))

    useEffect(() => {
      fetch(`https://github-contributions-api.jogruber.de/v4/fvcoder`)
        .then((res) => res.json() as Promise<ContributionData>)
        .then((data) => {
          setData(data);
        }).catch(e => {
          console.error(e);
        })
    }, [])

    return (
        <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex-1">
              <Graph data={dataYear ?? []} yearSelected={year} />
            </div>
            <div className="flex flex-col gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Button
                        key={`ContributionGraph-select-year-${i}`}
                        color={year === (currentYear - i) ? "primary" : "default"}
                        onPress={() => setYear(currentYear - i)}
                        fullWidth
                    >
                        {currentYear - i}
                    </Button>
                ))}
            </div>
        </div>
    )
}