Feature: Disney world Add New Paytment Method feature

@mytest
  Scenario Outline: As a user, I should able to Add New payment Method
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a home page of disney world
    Then I should see logged user and logout button
    When I click User profile link and Add New Payment Method
    When I click Add Payment Method Link
    Then I should see CreditDebit card add page
    When I added CreditDebit details on payment page
    #Then I should see added payment details of CreditDebit
    
    Examples:
      | username                 | password  |
      | OST7G92EZ@mailinator.com | disney123 |

 