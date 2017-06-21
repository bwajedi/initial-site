'use strict';

var $navButton = $(".main-nav button"),
		$printButton = $("#print-button"),
		$contactButton = $("#contact-button"),
		$homeButton = $("#home-button"),
		$aboutButton = $("#about-button"),
		$webButton = $("#web-button");

var $container = $(".container"),
		$home = $("#home"),
		$print = $("#print"),
 		$web = $("#web"),
 		$contact = $("#contact"),
 		$about = $("#about");

$container.children("article").not($home).hide();

$(document).ready(function() {

// EVENT HANDLERS --------------------------------------------

	$printButton.on("click", function() {
		$navButton.removeClass("active-nav-li");
		$container.children("article").hide();
		$printButton.addClass("active-nav-li");
		$print.fadeIn("fast");
	});

	$homeButton.on("click", function() {
		$navButton.removeClass("active-nav-li");
		$container.children("article").hide();
		$homeButton.addClass("active-nav-li");
		$home.fadeIn("fast");
	});

	$webButton.on("click", function() {
		$navButton.removeClass("active-nav-li");
		$container.children("article").hide();
		$webButton.addClass("active-nav-li");
		$web.fadeIn("fast");
	});

	$contactButton.on("click", function() {
		$navButton.removeClass("active-nav-li");
		$container.children("article").hide();
		$contactButton.addClass("active-nav-li");
		$contact.fadeIn("fast");
	});

	$aboutButton.on("click", function() {
		$navButton.removeClass("active-nav-li");
		$container.children("article").hide();
		$aboutButton.addClass("active-nav-li");
		$about.fadeIn("fast");
	});

// EVENT HANDLERS END ---------------------------------------


});