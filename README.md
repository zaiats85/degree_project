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

По запиту місцевого бізнесу та в рамках курсової роботи, що має практичне застосування.

[motivation](https://www.youtube.com/watch?v=FhzNSPiqO0M)

### `Рецензія`
Проект має на меті вирішення конкретного питання актуального для західного регіону України. А саме автоматизацію процесу оренди гірнолижного спорядження для орендаторів та відпочиваючих. 

На мою думку тема курсової роботи підібрана досить вдало, осільки покликана вирішити актуальне питання для багатьох відпочиваючих на гірсько-лижних курортах у західній частині України. А також, розпочати процес автоматизації щоденної роботи в точках оренди гірнолижного спорядження включно з фінансовою звітністю. 

Робота має актуальність та прикладну користь. Згідно статистичних даних (доступних на сайті https://invest.bukovel.com/en/) за 2017 рік лише Буковель відвідало близько 1,8 міліона відпочиваючих. Якщо припустити, що хоча б четверта частина з них орендувала спорядження, то ми маємо великий обсяг потенційних користувачів системою. 

Окремо можна відзначити, що згідно зі статистикою приблизно 25% відпочиваючих у Буковелі являються іноземцями. Підвищення рівня якості послуг та надання прозорого інструменту оренди безперечно може сприяти розвитку зовнішнього туризму.  

Додатково, важливим фактором є те, що станом на зараз в Україні зосереджено достатньо висококваліфікованих ІТ спеціалістів, які мають достаній рівень експертизи для розробки та впровадження запропонованої системи. При належній підтримці дана система може бути розроблена та введена в експлуатацію в незначні терміни.  

Однозначною перевагою сервісу є спрощене бронювання. Клієнти будуть задоволені привабливими пропозиціями, а фірма з прокату може оптимізувати планування, що дозволить активніше просувати свої послуги та швидше отримувати прибуток.

Розроблений сервіс могла б суттєво покращити система пільг та бонусний балів для кінцевого споживача. Така система могла б мотивувати своїх користувачів нагородами за певні види діяльності або використання певних послуг. Наприклад, нарахування бонусних балів за раннє бронювання, використання веб-сайту, відвідування пункту призначення в погану погоду абощо. Надалі ці бали можна було б обміняти на унікальні послуги, які неможливо купити за гроші, на кшталт місця для паркування чи трансферу до витягу.

Іншим покращенням може бути, якби сервіс стимулював користувача довше залишатися онлайн. Клієнти будуть раді регулярно входити в систему, якщо така присутність надає цікаву інформацію та додаткові пільги. Сервіс міг би надати можливість користувачам обмінюватись хорошими спогадами та враженнями із друзями та родичами, наприклад, про кількість подоланих вертикальних метрів, чи виконаних спусків тощо.

Anastasiia Lytvynenko 
Project Manager 
perfectial.com 

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
