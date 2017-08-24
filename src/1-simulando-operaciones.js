(function( $ ) {

	function getUsers() {
		setTimeout( function() {
			console.warn( "Users were retrieved!" );
		}, 500 );
	}

	function getProjects() {
		setTimeout( function() {
			console.warn( "Projects were retrieved!" );

		}, 800 );
	}

	function getIssues() {
		setTimeout( function() {
			console.warn( "Issues were retrieved!" );
		}, 600 );
	}

	getUsers();
	getProjects();
	getIssues();




})( jQuery );