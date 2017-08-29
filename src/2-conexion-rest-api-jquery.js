(function( $ ) {
	var serverURL = 'http://172.104.91.187';
	var usersURL = serverURL + '/users';
	var projectsURL = serverURL + '/projects';
	var issuesURL = serverURL + '/issues';

	function getDataByAJAX( url ) {
		return $.ajax( {
			url: url,
			headers: {
				'Content-Type': 'application/json',
				'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
			}
		} ).promise();
	}

	/*
	getDataByAJAX( usersURL )
		.then( function( responseUsers ) {
			console.warn( responseUsers );

			getDataByAJAX( projectsURL ).then( function( responseProjects ) {
				console.warn( responseProjects );

				getDataByAJAX( issuesURL ).then( function( responseIssues ) {
					console.warn( responseIssues );

				} );
			} );
		} );
	*/

	$.when( getDataByAJAX( usersURL ), getDataByAJAX( projectsURL ), getDataByAJAX( issuesURL ) )
		.then( function( responseUsers, responseProjects, responseIssues ) {
			console.log( responseUsers, responseProjects, responseIssues );
		} )

})( jQuery );