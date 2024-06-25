const currentDate = new Date();
const formattedDate =
    currentDate.toDateString().split(" ").slice(0, 3).join(" ") +
    " " +
    currentDate.toTimeString().split(" ")[0].split(":").slice(0, 3).join(":");
document.getElementById("dateTime").innerHTML = formattedDate;
const typingElement = document.querySelector(".typing");
let index = 0;
let currentText = "";
let isDeleting = false;
let currentMenu = "main";

const menus = {
    main: `Select a menu:<br><span onclick="handleMenuClick('1')">[1] Who is Kartikey?</span><br><span onclick="handleMenuClick('2')">[2] Contact me</span><br><span onclick="handleMenuClick('3')">[3] Achivements</span><br><span onclick="handleMenuClick('4')">[4] My works</span>`,
    1: `Who is Kartikey?<br><br>As a BTech CSE undergraduate, I am a ambitious individual with a strong background in computer science and engineering. My coursework has provided me with a solid foundation in programming, data structures, algorithms, and software development methodologies.
    I have hands-on experience in multiple programming languages such as C++, Python, and Java, as well as experience with various development tools and technologies. <br><br>The projects highlight My strengths in design and integration, as well as my ability to solve problems intuitively. 
    I am passionate about implementing and launching new projects and have the skill to translate business requirements into technical solutions. I am also able to bring team members together and lead them towards achieving set targets, which is an essential trait for any team member. These skills and attributes make me an ideal candidate for any project or team that requires strong technical skills and effective leadership.
    I am a quick learner and always eager to take on new challenges. I am seeking a fresher's job as an SDE and am confident that my skills and enthusiasm will make me a valuable asset to any organization.<br><br><span onclick="handleMenuClick('B')">[B] Back</span>`,


    2: `Contact:<br>- Email: <a href="mailto:kartikeysingh907@gmail.com">kartikeysingh907@gmail.com</a><br>- Discord: <a href="">@ZERI</a><br><br><span onclick="handleMenuClick('B')">[B] Back</span>`,
    3: `Achivements :<br> <br> - <strong>Celebal Technologies </strong> : Served as Campus Executive at Celebal Technologies, effectively promoting company interests within campus. <br> 
    - <strong>Google Cloud </strong>:Achieved Google Cloud Ready Facilitator Programs Ultimate Milestone. <br> 
    - <strong>Spark AR Skill </strong>:Participated in Spark AR Hackathon and won goodies <br> <br>
     Certification : <br><br>
     - <strong>NPTEL </strong>: Data Mining <br>
     - <strong>NPTEL </strong>: Software Testing <br>
     - <strong>NPTEL </strong>:Computer architecture and organization <br>
     - <strong>Internshala </strong>:Python Development Training <br>
     - <strong>Internshala </strong>:Android App Development <br>
     - <strong>Coursera </strong>:Introduction to Computer Vision <br>
     


    <br><br><span onclick="handleMenuClick('B')">[B] Back</span>`,
    4: `Some of my Projects:<br><br>
    --------- <strong>Machine Learning</strong> ---------<br><br> 
- <strong>Efficient Helmet and Number Plate Detection using YOLOv3 (Research Paper)</strong>:we developed a YOLOv3-based model for recognizing number plates and helmets in images. We improved data quality and diversity through pre-processing and gathered a dataset of annotated images. Our model was trained using a multi-phase learning rate program and evaluated on an independent test set. <a href="  " target="_blank">[GitHub]</a><br><br>


- <strong>TRAFFIC SIGN RECOGNITION USING CNN</strong>: Develop a CNN-based Traffic Sign Recognition system Model for Indian signs, achieving an accuracy of 96%. We created a robust API for seamless deployment and designed a professional, user-friendly GUI. The project utilized technologies such as Python, TensorFlow, Keras, FastAPI, Next.js, and Tailwind CSS.<a href="https://github.com/ZERI-SPARK/traffic_sign_cnn_model" target="_blank">[GitHub]</a><br><br>

--------- <strong>Web_Development</strong> ---------<br><br> 

- <strong>SPARK MUSIC WEBSITE</strong>: Developed a website with a focus on attractive UI/UX design, implementing seamless Google and email sign-in/sign-up. The site includes features such as song playback, detailed information views, song search, and language-based filtering, using technologies like Python, Django, and MySQL. <a href="https://github.com/ZERI-SPARK/music-player-using-django" target="_blank">[GitHub]</a><br><br>


- <strong>library Website</strong>: Developed a MERN stack library website featuring filters for artist, time, keywords, date, and names, ensuring a seamless, user-friendly experience for efficient book searches and discoveries. <a href="https://github.com/ZERI-SPARK/library2" target="_blank">[GitHub]</a>  <a href="library-assignment-mern.netlify.app/" target="_blank">[LIVE HOSTED]</a><br><br>

- <strong>subscription Seller Website</strong>: Developed a website allowing users to create and log in to their accounts, purchase monthly or yearly packages, and complete transactions on a dedicated payment page, displaying active packages post-payment. <a href="https://github.com/ZERI-SPARK/stripepayment-webapp" target="_blank">[GitHub]</a> <a href="https://subscription-stripe-payment.netlify.app/" target="_blank">[LIVE HOSTED]</a><br><br>

- <strong>PARADISE - RESTAURANT WEBSITE</strong>: Worked as a core member of a team designing UI/UX and developed a website using HTML, CSS, and JavaScript. The website features both customer and admin access with professional UI/UX and attractive pages. <a href="https://github.com/ZERI-SPARK/paradise" target="_blank">[GitHub]</a> <br><br>
<br><br>






--------- <strong>App_Development</strong> ---------<br><br> 

- <strong>ANDROID RESTAURANT APP WITH KOTLIN</strong>: built an app using Kotlin and XML, designing a professional UI/UX with perfect user interaction. The app includes various modules such as browsing food and ordering. <a href="https://github.com/ZERI-SPARK/Food_Runner" target="_blank">[GitHub]</a> <br><br>

- <strong>SHOPPING APP WITH FLUTTER</strong>: Built an app using Flutter and Dart, designing a user-friendly UI/UX. The app allows users to filter products based on their preferences. <a href="https://github.com/ZERI-SPARK/flutter-shrine" target="_blank">[GitHub]</a><br><br>


<span onclick="handleMenuClick('B')">[B] Back</span>`
    
};

function handleMenuClick(menuKey) {
    if (menuKey in menus && currentMenu !== menuKey) {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = menuKey;
            currentText = menus[menuKey];
            index = 0;
            typeDeleteAnimation();
        });
    } else if ((menuKey === "B" || menuKey === "b") && currentMenu !== "main") {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = "main";
            currentText = menus.main;
            index = 0;
            typeDeleteAnimation();
        });
    }
}
function typeDeleteAnimation(callback) {
    let speed = 5; // default typing speed
    let deleteSpeed = 3; // default deletion speed

    if (currentMenu === "1" || currentMenu === "3") {
        speed = 1; // Makes the typing faster for .
        deleteSpeed = 1; // Makes the deletion faster for. Adjust as needed.
    }

    if (isDeleting && typingElement.innerHTML !== "") {
        if (currentText.charAt(index - 1) === ">") {
            const openTagIndex = currentText.lastIndexOf("<", index);
            const tagName = currentText.substring(
                openTagIndex + 1,
                currentText.indexOf(" ", openTagIndex)
            );
            const startTagIndex = currentText.lastIndexOf(
                `</${tagName}>`,
                index
            );
            index = startTagIndex;
        } else {
            index--;
        }
        currentText = currentText.slice(0, index);
        typingElement.innerHTML = currentText;

        setTimeout(() => typeDeleteAnimation(callback), deleteSpeed);
    } else if (isDeleting) {
        isDeleting = false;
        if (callback) callback();
    } else if (!isDeleting && index < currentText.length) {
        if (currentText.charAt(index) === "<") {
            if (currentText.substr(index, 4) === "<br>") {
                const br = document.createElement("br");
                typingElement.appendChild(br);
                index += 4;
            } else {
                const closingTagIndex = currentText.indexOf(">", index);
                const tagName = currentText
                    .substring(index + 1, closingTagIndex)
                    .split(" ")[0];
                const endTagIndex =
                    currentText.indexOf(`</${tagName}>`, index) +
                    `</${tagName}>`.length;
                const outerHTML = currentText.substring(index, endTagIndex);
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = outerHTML;
                const childElement = tempDiv.firstChild;

                if (tagName === "a") {
                    childElement.target = "_blank";
                    speed = 1; // Faster typing for <a> tag
                } else if (tagName === "span") {
                    childElement.onclick = function () {
                        const menuKey = childElement
                            .getAttribute("onclick")
                            .replace("handleMenuClick('", "")
                            .replace("')", "");
                        handleMenuClick(menuKey);
                    };
                    speed = 1; // Faster typing for <span> tag
                }

                typingElement.appendChild(childElement);
                index = endTagIndex;
            }
        } else {
            typingElement.innerHTML += currentText.charAt(index);
            index++;
        }

        setTimeout(typeDeleteAnimation, speed);
    }
}

function handleUserInput(event) {
    const key = event.key;
    if (key in menus && currentMenu !== key) {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = key;
            currentText = menus[key];
            index = 0;
            typeDeleteAnimation();
        });
    } else if ((key === "B" || key === "b") && currentMenu !== "main") {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = "main";
            currentText = menus.main;
            index = 0;
            typeDeleteAnimation();
        });
    }
}

document.addEventListener("keydown", handleUserInput);

// Initialize the typing animation with the main menu on page load
currentText = menus.main;
typeDeleteAnimation();
