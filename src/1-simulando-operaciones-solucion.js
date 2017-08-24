(function( $ ) {

	function getUsers() {
		return new Promise( function( resolve ) {
			setTimeout( function() {
				console.warn( "Users were retrieved!" );

				var users = [
					{
						username: "esmeralda",
						api_token: "32324"
					}
				];

				resolve( users );
			}, 500 );
		} );
	}

	function getProjects() {
		return new Promise( function( resolve ) {
			setTimeout( function() {
				console.warn( "Projects were retrieved!" );
				var projects = [
					{
						title: "Project #1",
						description: "Desc #1"
					}
				];


				resolve( projects );
			}, 800 );
		} );
	}

	function getIssues() {
		return new Promise( function( resolve ) {
			setTimeout( function() {
				console.warn( "Issues were retrieved!" );
				var issues = [
					{
						title: "Issues #1",
						description: "Desc #1"
					}
				];
				resolve( issues );
			}, 600 );
		} );
	}

	Promise.all( [ getUsers(), getProjects(), getIssues() ] )
		.then( function( response ) {
			var users = response[ 0 ];
			var projects = response[ 1 ];
			var issues = response[ 2 ];

			var html = transformToHTML( users, projects, issues );
			render('#widget', html);
		} );


	function transformToHTML( users, projects, issues ) {
		var html = [];
		html.push( '<h2>Users</h2>' );
		users.forEach( function( user ) {
			html.push( '<div>' + user.username + '</div>' );
		} );

		html.push( '<h2>Projects</h2>' );
		projects.forEach( function( projects ) {
			html.push( '<div>' + projects.title + '</div>' );
		} );

		html.push( '<h2>Issues</h2>' );
		issues.forEach( function( issues ) {
			html.push( '<div>' + issues.title + '</div>' );
		} );

		return html.join( '' );
	}

	function render( selector, htmlInput ) {
		$( selector ).html( htmlInput );
	}
})( jQuery );