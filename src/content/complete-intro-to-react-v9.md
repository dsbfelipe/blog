## Curso

# Análise: Complete Intro to React, V9 - Frontend Masters

### Por Felipe dos Santos Bento

Algo que costuma ficar perambulando bastante pela minha cabeça enquanto eu programo, é se eu estou implementando as
coisas da melhor forma. Acredito que seja um problema bastante comum na nossa área, devido a infinidade de maneiras
de abordar um mesmo problema.

Com isso em mente decidi criar uma rotina pra fazer alguns cursos e desenvolver projetos com essa base obtida de
profissionais mais experientes e a documentação de baixo do braço, a minha ideia é minimizar o máximo possível o uso de
LLMs no desenvolvimento dos meus projetos pessoais, pra aprender tendo um norte mais bem fundamentado, seja a partir
de cursos de pessoas com muito mais experiência nessas tecnologias, ou através da documentação escrita por devs que
trabalham ativamente nelas.

Com essa ideia em mente, decidi pegar alguns cursos do Frontend Masters pra estudar, todos os professores da plataforma
são desenvolvedores absurdos, e pra começar, peguei o curso "Complete Intro to React" do Brian Holt, especialista em
JavaScript que já trabalhou em empresas como Microsoft, Netflix e Reddit.

#### Abordagem voltada a por quês

O primeiro ponto que me chamou atenção logo de início, foi o foco em explicar o por quê fazer as coisas da forma que
elas eram feitas no curso. O primeiro exemplo que vem a cabeça, foi logo na instalação das ferramentas, em vez de
simplesmente dar um `npm create vite@latest` pra iniciar o projeto, ele foi instalando e configurando cada coisinha,
explicando a função de cada parâmetro, desde a configuração do Vite, até a parte do Prettier, Eslint e mais
pra frente das bibliotecas de testes.

Durante todo o curso, a abordagem do Brian Holt em relação ao conteúdo segue esse padrão, ele explica por que certa
funcionalidade existe, parte pra como implementar, e complementa com o por quê dele implementar daquela forma e quais
as melhores práticas em relação àquele tópico.

#### Qual o conteúdo

A ideia do curso, segundo o próprio Brian Holt, é apresentar todo material necessário pra começar a atuar
profissionalmente com _React_, então ele passa pelos principais Hooks, como `useState` e `useEffect`, exemplifica
cenários em que talvez valha a pena partir pra um `useContext`, além de dar uma pincelada no `useRef`, que pelo que eu vi,
ele aprofunda mais no curso de React intermediário.

Além dos Hooks nativos, um dos módulos envolve a criação de um Custom Hook e outro a integração com algumas bibliotecas
populares no ecossistema JavaScript, como o TanStack Router e TanStack Query, e novamente, sempre explicando como e
por que utilizar essas ferramentas.

Antes de partir pra parte referente a testes, ele também explica dois conceitos um pouco menos frequentes, que são os
Error Boundaries e Portais, mostrando cenários em que eles podem ser bem úteis, e aproveita a explicação sobre Error
Boundaries pra abordar o uso de componentes de classe em React, que apesar de não serem mais tão utilizados hoje, ainda
estão presentes em muitas codebases legado por aí.

Ele finaliza o curso dando uma geral em relação a testes, apresentando diversas ferramentas e bibliotecas disponíveis
pra essa finalidade, ensinando desde a que ele usa atualmente, até a que ele acredita que vá passar a ser mais adotada
no futuro, e por fim, dá uma pequena passada em alguns conceitos que chegaram no React 19, que na época ainda não era
estável, como o `use` e o `suspense`
