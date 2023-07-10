import "./App.css";
import Form from "./components/Form";

function App() {
	return (
		<div>
			<div className=" mt-16  flex justify-center items-center">
				<h1 className="text-[35px] border-[3px] border-black px-6 py-2 rounded-xl">
					GitHub User Finder
				</h1>
			</div>
			<Form />
		</div>
	);
}

export default App;
