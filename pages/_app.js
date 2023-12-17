import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import "@/styles/style.scss";

export default function App({ Component, pageProps, router }) {
	return (
		<div className="main">
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</div>
	);
}
