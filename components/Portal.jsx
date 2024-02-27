import {createContext, useState, useContext, useEffect} from "react";

const PortalContext = createContext({gates: {}});

function Provider({children}) {
	const [gates, setGates] = useState({});

	function teleport(gateName, element) {
		setGates((prev) => {
			return {...prev, [gateName]: element};
		});
	}

	return (
		<PortalContext.Provider value={{gates, teleport}}>
			{children}
			{Object.values(gates).map((C) => C)}
		</PortalContext.Provider>
	);
}

function Gate({gateName, children}) {
	portal = useContext(PortalContext);
	useEffect(() => {
		portal.teleport(gateName, children);
	}, [children]);
	return <></>;
}

export default {Provider, Gate};
