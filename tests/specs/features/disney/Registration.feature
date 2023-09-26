Feature: Registration feature for Disney world

  Background: Open Registration page

    Given I open the disneyworld Registration page
  Scenario Outline: As a valid user, I should able to <country> <password> register to disney world
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password as <password> and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    Then I should see logged user and logout button
    When I am on the login page
    When I login with existing user with password as "disney123"
    Then I should see a home page of disney world
    Then I should see logged user and logout button
    Examples:
      | useremail                 | prefix | firstname | lastname | password  | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | disney123 | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |
  #  | tst3211233@mailinator.com | Miss   | cfname    | clname   | disney123 | 01-01-1989 | Canada         | 356 Yonge St       | Yonge St         | Toronto | Ontario    | M5B 1S5    |
  # | tst3211232@mailinator.com | Miss   | ufname    | ulname   | disney123 | 01-01-1989 | United Kingdom | 48                 | Leicester Square | London  | London     | WC2H 7LU   |
  #| tst3211235@mailinator.com | Miss   | sfname    | slname   | disney123 | 01-01-1989 | Spain          | 45, 3º, 2ª Ave     | Santa Mari       | Madrid  | Madrid     | 28012      |
  #| tst3211236@mailinator.com | Miss   | arfname   | arlname  | disney123 | 01-01-1989 | Argentina      | Humberto Primo 630 | Corboda          | Corboda | Corboda    | 14003      |


  Scenario Outline: As a valid user, I should able to <country> <password> register to disney world with 256 chracter password
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password with length 256 and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    Then I should see logged user and logout button
    When I am on the login page
    When I login with existing user with password as "disney123"
    Then I should see a home page of disney world
    Then I should see logged user and logout button
    Examples:
      | useremail                 | prefix | firstname | lastname | password  | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | disney123 | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |

  Scenario Outline: As a valid user, I should able see password error message if password length 257 character
    When I fill username as <useremail> and click continue button
    And I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    And I enter Password with length 257 and Birthdate as <birthdate>
    And I enter Billing address country as <country>, address as <line1>, line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    And I selects notification consent as "Yes" and disney world consent as "Yes"
    And I click on Create registration button
    Then I should see password error message as "The password is too long."

    Examples:
      | useremail                 | prefix | firstname | lastname | password  | birthdate  | country       | line1       | line2   | city    | region     | postalcode |
      | tst3211234@mailinator.com | Miss   | afname    | alname   | disney123 | 01-01-1989 | United States | 925 4th Ave | 4th Ave | Seattle | Washington | 98012      |

  Scenario Outline: As a user, I should not log into the Disney world with Bad password
    Given I am on the login page
    When I login with existing user with password as "disney123"
    Then I should see logerror message as <errorMsg>
    Examples:
      | password     | errorMsg               |
      | disney123444 | We couldn't log you in |

  Scenario Outline: As a user, I should not log into the Disney world with blank password
    Given I am on the login page
    When I login with existing user with password as ""
    Then I should see logerror message as <errorMsg>
    Examples:
      | password | errorMsg               |
      | ""       | We couldn't log you in |


  Scenario: As a user, I should able to view - Open External Browser For Terms of Use
    When I click on "Terms of Use" on registration page
    Then I should see "Terms of Use" Page

  Scenario: As a user, I should able to view - Open External Browser For Privacy Policy
    When I click on "Privacy Policy" on registration page
    Then I should see "Privacy Policy" Page

  Scenario: As a user, I should able to view - My Disney Experience Terms and Conditions.
    When I click on "My Disney Experience Terms and Conditions" on registration page
    Then I should see "My Disney Experience Terms and Conditions" Page

