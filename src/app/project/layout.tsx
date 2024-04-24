import { getServerSession } from 'next-auth';

interface ProjectLayoutProps {
  children: JSX.Element;
  explorer: JSX.Element;
}

export default async function ProjectLayout(props: ProjectLayoutProps) {
  const session = await getServerSession();

  if (
    session &&
    session.user &&
    session.user.email === 'thefersh24@gmail.com'
  ) {
    return props.explorer;
  }

  return props.children;
}
