(function() {

	var app = angular.module('blog', []);
	app.controller('BlogController', function($scope) {
		this.articles = posts;
		this.visiblePopup = false;
		this.showPopup = function() {
			this.visiblePopup = true;
		};
		this.clearForm = function() {
			$scope.article = {};
		};
		this.isPopup = function() {
			return this.visiblePopup;
		};
		this.addPost = function() {
			var a = new Date();
			$scope.article.date = a.getTime();
			this.articles.push($scope.article);
			this.clearForm();
			this.closePopup();
		};
		this.closePopup = function() {
			this.visiblePopup = false;
		};
	});

	app.directive('blogArticles', function() {
		return {
	        restrict: "A",
	      	templateUrl: "directives/blog-articles.html"
    	};
	});

	app.directive('blogPopup', function() {
		return {
	        restrict: "A",
	      	templateUrl: "directives/blog-popup.html"
    	};
	});
	

	var posts = [
		{
			title: 'Blog title 1',
			author: 'Author 1',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iusto placeat aliquid tempore harum, similique!',
			date: '1400000100845',
			image: 'images/blog-img.jpg'
		},
		{
			title: 'Blog title 2',
			author: 'Author 2',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, placeat est. Alias illo hic quo nobis, aspernatur iste ut voluptate.',
			date: '1406000101845'
		}
	];
})();