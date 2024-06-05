import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../styles/accordion.css";

const AccordionDemo = () => (
	<Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
		<Accordion.Item className="AccordionItem" value="item-1">
			<AccordionTrigger>Bathroom</AccordionTrigger>
			<AccordionContent>The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling.</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-2">
			<AccordionTrigger>Closets</AccordionTrigger>
			<AccordionContent>The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling.</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-3">
			<AccordionTrigger>Kitchen</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">The Diamond is not just a building, but a purpose-built rental community with the Junction vibe, offering local flavour and a city feeling.</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Header className="AccordionHeader">
		<Accordion.Trigger className={classNames("AccordionTrigger", className)} {...props} ref={forwardedRef}>
			{children}
			<ChevronDownIcon className="AccordionChevron" aria-hidden />
		</Accordion.Trigger>
	</Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Content className={classNames("AccordionContent", className)} {...props} ref={forwardedRef}>
		<div className="AccordionContentText">{children}</div>
	</Accordion.Content>
));

export default AccordionDemo;
