import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../styles/tabs.css";

const TabsDemo = () => (
	<Tabs.Root className="TabsRoot" defaultValue="tab1">
		<Tabs.List className="TabsList" aria-label="Manage your account">
			<Tabs.Trigger className="TabsTrigger" value="tab1">
				Tab 1
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab2">
				Tab 2
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab3">
				Tab 3
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab4">
				Tab 4
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab5">
				Tab 5
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className="TabsContent" value="tab1">
			<p className="Text">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling. Modern open concept 1, 2 and 3 bedroom suites overlooking the city, while connecting you to every part of it with the TTC at your doorstep and just minutes to the subway, UP Express and GO Train.</p>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab2">
			<p className="Text">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling. Modern open concept 1, 2 and 3 bedroom suites overlooking the city, while connecting you to every part of it with the TTC at your doorstep and just minutes to the subway, UP Express and GO Train.</p>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab3">
			<p className="Text">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling. Modern open concept 1, 2 and 3 bedroom suites overlooking the city, while connecting you to every part of it with the TTC at your doorstep and just minutes to the subway, UP Express and GO Train.</p>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab4">
			<p className="Text">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling. Modern open concept 1, 2 and 3 bedroom suites overlooking the city, while connecting you to every part of it with the TTC at your doorstep and just minutes to the subway, UP Express and GO Train.</p>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab5">
			<p className="Text">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling. Modern open concept 1, 2 and 3 bedroom suites overlooking the city, while connecting you to every part of it with the TTC at your doorstep and just minutes to the subway, UP Express and GO Train.</p>
		</Tabs.Content>
	</Tabs.Root>
);

export default TabsDemo;
