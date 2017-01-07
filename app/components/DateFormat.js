import React from 'react';
import {ReactIntl} from 'react-intl'
import {FormattedDate} from 'react-intl'
import {FormattedRelative} from 'react-intl'
import {IntlProvider} from 'react-intl';

export default class DateFormat extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }
    
    render() {
        return(
        <IntlProvider locale="en">
            <div>
                <FormattedDate value={this.state.date} 
                    day="numeric"
                    month="long"
                    year="numeric" />
                <FormattedRelative value={this.state.date} />
            </div>
        </IntlProvider>
        )
    }
}