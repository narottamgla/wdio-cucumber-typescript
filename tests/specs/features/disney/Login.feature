Feature: Disney world Login feature

 Scenario Outline: As a user, I can log into the Disney world

    Given I am on the login page
    When I login with <username> and <password>
   # Then I should see a home page of disney world
   # When I click logout button of disney world app
   # Then I should logout and see login page
  Examples:
      | username                 | password  |
      | DX7XJE14F@mailinator.com | disney123 |
