import React, { useState } from 'react';

interface AppProps {
	title: string;
}

const App = ({ title }: AppProps) => {
	const [value, setValue] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	return (
		<>
			<h2>{title}</h2>
			<input value={value} onChange={handleChange} />
			<p>Значение: {value}</p>
		</>
	);
};

export default App;
