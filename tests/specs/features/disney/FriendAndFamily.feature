Feature: Friends and Family feature for Disney world

  Background: Open Registration page
    Given I open the disneyworld Registration page

  @pass
  Scenario Outline: As a valid user, I should be able to create friends by adding guests and view pending invites using search criteria
    Given I am on the login page
    When I click First User profile link and click Friend Family link
    Then I should navigate to Friend Famliy AddGuest Search fields
    And I selected the displayed Guest
    Then I should see Pending Invites
    Examples:
      | useremail                  | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | password  | useremail2                  | useremail3                 |
      | ${userEmailOfFirstNewUser} | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | disney123 | ${userEmailOfSecondNewUser} | ${userEmailOfThirdNewUser} |


@pass
  Scenario Outline: As a valid user, I should be able to create friends by adding guests and view pending invites using search criteria
    Given I am on the login page
    When I click Second User profile link and click Friend Family link
    Then I should navigate to Friend Famliy AddGuest Search fields
    And I selected the displayed Guest
    Then I should see Pending Invites
    Examples:
      | useremail                  | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | password  | useremail2                  | useremail3                 |
      | ${userEmailOfSecondNewUser} | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | disney123 | ${userEmailOfSecondNewUser} | ${userEmailOfThirdNewUser} |


@pass
  Scenario Outline: As a valid user, I should be able to create friends by adding guests and view pending invites using search criteria
    Given I am on the login page
    When I click Third User profile link and click Friend Family link
    Then I should navigate to Friend Famliy AddGuest Search fields
    And I selected the displayed Guest
    Then I should see Pending Invites
    Examples:
      | useremail                  | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | password  | useremail2                  | useremail3                 |
      | ${userEmailOfSecondNewUser} | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | disney123 | ${userEmailOfSecondNewUser} | ${userEmailOfThirdNewUser} |



  Scenario Outline: As a valid user, I should able to add/remove friend and family
    Given I am on the login page
    #  When I read the login data and login
    When I click First User profile link and click Friend Family link
    Then I should navigate to Friend Famliy tab
    Given I am at the login page of "https://disneyworld.disney.go.com/login/"
    When I login existing user with email <useremail1> and  password as <password>
    Examples:
      | useremail                 | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | useremail1             | password  |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | one_fnf@mailinator.com | disney123 |


  Scenario Outline: As a valid user, I should be able to see List Sharing & Search Settings for Invite Guests
    Given I am on the login page
    When I click Third User profile link and click Friend Family link
    Then I should navigate to Friend Famliy AddGuest Search fields
    And I selected the displayed Guest
    Then I should see Pending Invites

    Examples:
      | useremail                  | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | password  | useremail2                  | useremail3                 |
      | ${userEmailOfFirstNewUser} | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | disney123 | ${userEmailOfSecondNewUser} | ${userEmailOfThirdNewUser} |


  @pass1
  Scenario Outline: Multiple users Registration
    Given I am on the login page
    When I click First User profile link and click Friend Family link
    And I should navigate to SignOut
    Given I am on the login page
    When I click Second User profile link and click Friend Family link
    And I should navigate to SignOut
    Given I am on the login page
    When I click Third User profile link and click Friend Family link
    And I should navigate to SignOut
    Examples:
      | useremail                  | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode | password  | useremail2                  | useremail3                 |
      | ${userEmailOfFirstNewUser} | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      | disney123 | ${userEmailOfSecondNewUser} | ${userEmailOfThirdNewUser} |


 Scenario Outline: As a valid user, I should able to accept friend and family 
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a home page of disney world
    Then I should see logged user and logout button
    Then I should see notification Modal with notifications
    When I accepts pending invites for friend family
    Then I should see user in friend family list with name as "Name k Name"

     Examples:
      | username                 | password  |
      | three_fnf@mailinator.com | disney123 |


  Scenario: As a valid user, I should able to reject frined and family invites
    Given I am on the login page
    When I click User profile link and click Friend Family link
    Then I should navigate to Friend Famliy tab
    Given I am at the login page of "https://disneyworld.disney.go.com/login"
    When I login existing user with email "three_fnf@mailinator.com" and  password as "disney@123"
    Then I should see notification Modal with notifications
    When I rejects pending invites for friend family