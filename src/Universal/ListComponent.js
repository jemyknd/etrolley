import React, { Component } from 'react';

class ListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listLinks: props.listData,
		};
	}

	render() {
		let links = this.state.listLinks.map((link, index, itemStyle) => {
			return (
				<a href={'/' + `${link}`}>
					<div className="mb1 black-50 hover-black pointer bg " key={index}>
						<div className="pointer">{link}</div>
					</div>
				</a>
			);
		});

		return <div>{links}</div>;
	}
}
export default ListComponent;
