Feature: Disney world Login feature

    Scenario Outline: As a user, I can log into the Disney world

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a home page of disney world
        Then I should see logged user and logout button
        When I click logout button of disney world app
        Then I should logout and see login page
        Examples:
            | username                 | password  |
            #| DX7XJE14F@mailinator.com | disney123 |
            | OST7G92EZ@mailinator.com | disney123 |
            #| CIZWCL542@mailinator.com | disney123 |


          Scenario Outline: As a user, I should not log into the Disney world with invalid credentials

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see logerror message
        Examples:
            | username                 | password  |
           # | DX7XJE14F@mailinator.com | disney123 |
            | OST7G92EZ@mailinator.com | disney123444 |
          #  | CIZWCL542@mailinator.com | disney123 |


        