import React from 'react';
import ReactDom from 'react-dom';
import Header from '../../component/header';
import Footer from '../../component/footer';
class AppComponent extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<h2>main</h2>
				<Footer />
			</div>
		);
	}
}
ReactDom.render(
	<AppComponent />,
	document.getElementById('root')
);
