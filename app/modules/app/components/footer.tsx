import { Footer } from "flowbite-react";
import { SiFacebook } from "react-icons/si";

export function AppFooter() {
	return (
		<Footer container>
			<div className="container mx-auto">
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright href="/" by="Fvcoder" year={2023} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={SiFacebook} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
