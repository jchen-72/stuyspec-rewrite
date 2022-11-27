import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const handleFormSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log("Email: ", email);
		const body = { email };
		const request = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (request.ok) {
			const rjson = await request.json();

			console.log(request);
		}
	};
	return (
		<>
			<Head>
				<title>Login | The Spectator</title>
				<meta
					name="description"
					content="Staff login for The Stuyvesant Spectator"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main id={styles.container}>
				<h1 id={styles.heading}>Login</h1>
				<form onSubmit={handleFormSubmit}>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className={styles.input}
						type="email"
					/>
					<br />
					{/* <input className={styles.input} type="password" /> */}
					<br />
					<input className={styles.button} type="submit" />
				</form>
			</main>
		</>
	);
};

export default Login;
