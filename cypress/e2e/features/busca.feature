Feature: Busca no site do Governo

  Scenario: Buscar por ENEM e visualizar resultados
    Given que estou no site do governo
    When eu pesquiso por ENEM
    Then devo ver os resultados relacionados
