import { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);

	const handleChange = (event) => {
		setUsername(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setUsername("");

		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			const data = await response.json();
			setUserData(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col gap-14 items-center justify-center">
			<div className="flex w-full items-center space-x-2 md:w-1/3 mt-12">
				<input
					className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Enter Username"
					value={username}
					onChange={handleChange}
				></input>
				<button
					type="button"
					onClick={handleSubmit}
					className="rounded-md bg-black px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-36 h-[40px]"
				>
					Get Data
				</button>
			</div>
			{userData && (
				<div className="flex flex-col justify-center items-center gap-10 mb-20">
					<img
						className="w-[300px] h-[300px] rounded-[50px] border-[3px] border-gray-800"
						src={userData.avatar_url}
						alt={userData.login}
					/>

					<div className="flex justify-center items-center gap-10">
						<div className="border-2 border-black w-auto flex flex-col gap-2 px-5 py-3 rounded-xl  flex-grow">
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-xl flex-1">
								Name: {userData.name ? userData.name : `Not Available`}
							</h2>
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-lg flex-1">
								Location:{" "}
								{userData.location ? userData.location : `Not Available`}
							</h2>
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-lg flex-1">
								Followers:{" "}
								{userData.followers ? userData.followers : `Not Available`}
							</h2>
						</div>
						<div className="border-2 border-black w-[300px] flex flex-col gap-2 px-5 py-3 rounded-xl  flex-grow">
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-lg flex-1">
								Portfolio:{" "}
								{userData.blog ? (
									<a
										className="text-red-400"
										target="_blank"
										href={userData.blog}
										rel="noreferrer"
									>
										Portfolio Link
									</a>
								) : (
									`Not Available`
								)}
							</h2>
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-lg flex-1">
								Public Repos:{" "}
								{userData.public_repos
									? userData.public_repos
									: `Not Available`}
							</h2>
							<h2 className="bg-gray-700 text-white  px-5 py-2.5 rounded-lg text-lg flex-1">
								Bio: {userData.bio ? userData.bio : `Not Available`}
							</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;
