Feature: Disney world Login feature

  Scenario Outline: As a user, I can log into the Disney world

   # Given I am on the login page
    #When I login with <username> and <password>
    #Then I should see a home page of disney world
    #Then I should see logged user and logout button
    #When I click logout button of disney world app
    #Then I should logout and see login page
    #Examples:
     # | username                 | password  |
      #| OST7G92EZ@mailinator.com | disney123 |

  Scenario Outline: As a user, I should not log into the Disney world with Bad password
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see logerror message
    Examples:
      | username                 | password     | errorMsg               |
      | OST7G92EZ@mailinator.com | disney123444 | We couldn't log you in |

  Scenario Outline: As a user, I should not log into the Disney world with blank password
    Given I am on the login page
    When I login with <username> and ""
    Then I should see logerror message as <errorMsg>
    Examples:
      | username                 | password | errorMsg               |
      | OST7G92EZ@mailinator.com | ""       | We couldn't log you in |