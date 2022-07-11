# Aplicação Web

## tecnologias utilizadas

-   React
-   React Router
-   React-hook-form
-   React Query
-   Typescript

## Logica utilizada na resolução do desafio

A aplicação tinha como proposito, realizar as operações definidas pela api (CRUD), e favoritar e desfavoritas anúncios de veículos.

Essa questão de favoritar/desfavoritar, na hora surgiu a ideia de testar optimistic updates com o react query, que eu já conhecia um pouco mas não tinha me aprofundado.

Resumindo o "truque" principal da aplicação é estes optimistic updates que atualiza primeiro o state dos dados sem realizar um refecth e apos isso que é realizado o fetch com os dados atualizados, dessa forma é instantâneo o feedback da ação por parte do cliente.
