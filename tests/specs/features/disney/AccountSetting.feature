Feature: Account Setting feature for Disney world

  Background: Open Registration page
    Given I open the disneyworld Registration page

  Scenario Outline: As a valid user, As a user, I should able to navigate change email/password screen
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password as <password> and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    #Then I should see logged user and logout button
    When I click User profile link and Add account setting tab
    Then I should navigate to account setting tab
    ##Change email
    ##Change password
    When I click change password link to change user email
    Then I should see otp screen to change user email
     When I click change password link to change user email
    Then I should see otp screen to change user email
    Examples:
      | useremail                 | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |


   Scenario Outline: As a valid user, As a user, I should able to check More security settings page
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password as <password> and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    When I click User profile link and Add account setting tab
    Then I should navigate to account setting tab
    When I click More security settings tabs
    Then I should see more security settings page in new window
    Examples:
      | useremail                 | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |


  @mytest
Scenario Outline: As a valid user, As a user, I should able to change home/mobile phone
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password as <password> and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    When I click User profile link and Add account setting tab
    Then I should navigate to account setting tab
    When I enter mobile number to change and click Done Button 
    When I enter mobile number to change and click verify link 
    Then I should see validate code screen
    When I enter mobile number to change and click Done Button
    Then I should see validate code screen
    Examples:
      | useremail                 | prefix | firstname | lastname | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |
