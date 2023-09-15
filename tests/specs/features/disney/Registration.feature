Feature: Registration feature for Disney world

  Background: Open Registration page
    Given I open the disneyworld Registration page

  Scenario Outline: As a valid user, I should able to register to disney world
    When I fill username as <useremail> and click continue button
    When I enter Prefix as <prefix>, firstname as <firstname> ,lastname as <lastname>
    #When I enter Password as <password> and Birthdate as <birthdate>
    #When I enter Billing address country as <country>, address as <line1> , line2 as <line2>, city as <city>, region as <region> and postalcode as <postalcode>
    #When I selects notification consent as "Yes" and disney world consent as "Yes"
    #When I click on Create registration button

    #When I click on "Createregistrationbutton" on "registration" page

    #Then I should see logged user and logout button

    Examples:
      | useremail                 | prefix | firstname | lastname | password     | birthdate  | country | line1 | line2 | city | region | postalcode |
      | tst3211233@mailinator.com | Miss   | fname     | lname    | Password@123 | 01-01-1989 | USA     | add1  | add2  | NYC  | test   | 433335     |
