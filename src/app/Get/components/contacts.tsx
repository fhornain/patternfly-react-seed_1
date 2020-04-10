import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

const Contacts: React.FunctionComponent<{}>  = ({contacts}) => {
    return (
	<PageSection>	
	<div>
            <center><h1>Contact List</h1></center>
	      <ul>
                {contacts.map(contact => (
		   <li key={contact.name}>
			{contact.url}
		   </li>
                ))}
	      </ul>
        </div>
	</PageSection>
    )
};

export default Contacts
