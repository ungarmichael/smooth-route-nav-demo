"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Inner from "../Inner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Inner>
			<h1>Home</h1>

			<div className="body">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					imperdiet nibh sit amet velit dignissim, non tempus nisl pellentesque.
					Praesent sagittis magna sit amet ex blandit, id pharetra lectus
					feugiat. Praesent sit amet congue ipsum, in ultrices neque. In dapibus
					in purus vitae dignissim. Quisque molestie ullamcorper elementum. Sed
					sodales erat augue. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Duis aliquet quis lectus vitae venenatis. Aliquam erat volutpat.
					Nulla maximus sodales nibh dapibus congue. Integer nec pharetra felis,
					quis commodo elit. Fusce et aliquet neque. Vivamus leo diam, pharetra
					ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula, laoreet ut
					volutpat sit amet, convallis et turpis.
				</p>

				<p>
					Quisque molestie ullamcorper elementum. Sed sodales erat augue. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet quis
					lectus vitae venenatis. Aliquam erat volutpat. Nulla maximus sodales
					nibh dapibus congue. Integer nec pharetra felis, quis commodo elit.
					Fusce et aliquet neque. Vivamus leo diam, pharetra ut lorem eu,
					suscipit egestas ipsum. Aenean mauris ligula, laoreet ut volutpat sit
					amet, convallis et turpis.
				</p>
			</div>
		</Inner>
	);
}
