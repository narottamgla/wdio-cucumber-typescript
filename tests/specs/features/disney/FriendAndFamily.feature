Feature: Friends and Family feature for Disney world

  Background: Open Registration page
    Given I open the disneyworld Registration page

  @mytest
  Scenario Outline: As a valid user, I should able to add/remove friend and family 
    Given I am on the login page
  #  When I read the login data and login
    When I click User profile link and click Friend Family link
    Then I should navigate to Friend Famliy tab
    Given I am at the login page of "https://disneyworld.disney.go.com/"
    When I login existing user with email "one_fnf@mailinator.com" and  password as "disney@123"

    Examples:
      | useremail                 | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |
