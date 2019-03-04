Курсова робота, з дисципліни "ОСНОВИ ПРОГРАМУВАННЯ", на тему "Мережа пунктів прокату гірськолижного спорядження"

### `Ідея:` 
В зв'язку з реальною наявністю численних пунктів прокату г/л спорядження (n) поблизу популярних українських г/л курортів:
Буковель (n=180*), Драгобрат (n=40), Славське (n=60) і т.д., існує ідея об'єднання їх у спільну мережу, яка вирішувала б наступні завдання:
#### `для відпочиваючих:`
- фактичні, не спекулятивні ціни на спорядження
- попереднє замовлення online, оплата
- моніторинг наявності спорядження
- відгуки, cкарги та заохочення, обговорення, cитуативні чати, допомога

#### `для власників пунктів прокату:` 
- гарантування повернення спорядження (без застави - паспорту громадянина** України),
- наявність спільного доступу до рейтингу користувачів
- проста фінансова звітність
- аналітика по інвентарю
- автоматизація процесу обслуговування відпочиваючих

#### `для власника продукту:` 
- стягування комісії (до 5%) з кожної успішної ренти.
- організація навчання персоналу прокатів

#### `для розробника:`
- вибір технологій розробки. ріст. досвід.
- greenfield project. 
- no legacy. the latest the greatest. 
- full test covarage. 

### `Економічне Обгрунтування`
На прикладі ТК "Буковель" можна стверджувати, що прокат г/л спорядження є 4 статтею доходів курорту після:  
- катання (абонементи - денні, річні, погодинні тощо)
- проживання (готелі, садиби, camping тощо) 
- лижної та сноуборд шкіл
і складає 15% - 28%.

### `Використані Технології`
- react.js (client)
- graphQL. Apollo Client (communication)
  https://facebook.github.io/graphql/June2018/
- apollo client/server driver
- Node.js (server) || GoLang
- neo4j (DB)
- Open Street Map
- docker (deployment)
- AWS stack (EC2, pipeline, cloudfront, codebuild, codecommit, S3) (infrastructure)

*Включаючи прилеглі с.Яблуниця, c.Татрів, c.Поляниця, с.Микуличин. 
** Або паспортів громадянина інших держав

### `Мета` 
Просто так. Щоб поставити жирну крапку в цій дурній затії і написати курсову.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
