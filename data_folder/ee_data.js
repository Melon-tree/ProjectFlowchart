function getData() {

    class Course {
        constructor(id, code, name, prerequisites = [], corequisites = [], semester, description = "") {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
            this.description = description;
        }
    }

    let courseData = {
        courses: [
            //new Course(id, code, name, prereq [], coreq[], semester, desc [])
            
            //--------------------SEMESTER 1--------------------
            new Course(0, "ECS 1100", "Intro to Eng and CS", [], [], "1", "An introduction to the fields of engineering and computer science. This course provides a broad overview of the professions."),
            new Course(1, "CS 1325", "Introduction to Programming", [], [], "1", "Introduction to computer science and software engineering principles."),
            new Course(2, "MATH 2413/2417", "Calculus I", [], [], "1", "Fundamental principles of calculus including limits, derivatives, and integrals. Essential for understanding advanced mathematical concepts."),
            new Course(3, "CORE", "CORE", [], [], "1", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(31, "CORE", "CORE", [], [], "1", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(4, "EE 1100", "Introduction to EE", [], [], "1", "Introduction to programming using a high-level language. Emphasizes problem-solving techniques and algorithm development."),
            //--------------------SEMESTER 2--------------------
            new Course(5, "MATH 2414/2419", "Calculus II", ["MATH 2413"], [], "2", "Continuation of Calculus I, covering techniques of integration and series. Critical for students pursuing advanced studies in mathematics."),
            new Course(6, "PHYS 2325/2125", "Mechanics and Lab", ["MATH 2413"], [], "2", "Fundamentals of mechanics, including motion and forces. Accompanied by a lab to provide hands-on experience."),
            new Course(7, "ENGR 2300", "Linear Algebra for Engineers", ["CS 1436"], [], "2", "Introduction to computer science and programming. Covers basic concepts and structures in computer science."),
            new Course(8, "EE 1202", "Introduction to EE II", ["MATH 2413"], [], "2", "Fundamental concepts of discrete mathematics. Includes logic, sets, and functions essential for computer science."),
            new Course(32, "EE 2310", "Introduction to Digital Systems", [], [], "2", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 2.5--------------------
            new Course(11, "MATH 2415", "Calculus of Several Variables", ["MATH 2414"], [], "2.5", "Exploration of calculus in multiple dimensions. Includes partial derivatives and multiple integrals."),
            //--------------------SEMESTER 3-------------------- //--------------------SEMESTER 3--------------------
            new Course(9, "MATH 2420", "Differential Equations", ["MATH 2413"], [], "3", "Introduction to linear algebra concepts including matrix operations and vector spaces."),
            new Course(10, "ENGR 3341", "Probability Theory and Statistics", ["CS 1337"], [], "3", "Advanced topics in computer science. Focuses on data structures and algorithms."),
            new Course(33, "CORE", "CORE", [], [], "3", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(11, "PHYS 2326/2126", "Electricity and Magnetism and Lab", ["PHYS 2325/2125", "MATH 2414"], [], "3", "Study of electricity and magnetism principles. Lab component provides practical understanding of theoretical concepts."),
            new Course(12, "CORE", "CORE", ["CS 1337", "CS 2305"], [], "3", "Basics of probability and statistics with computer science and software engineering applications."),
            //--------------------SEMESTER 4--------------------
            new Course(13, "EE 3201", "Fundamentals I", ["CS 2336", "CS 2305"], ["CS 3341"], "4", "Study of data structures and algorithms. Key for efficient problem-solving and programming."),
            new Course(14, "EE 2301", "Electrical Network Analysis", ["CS 2336"], [], "4", "Introduction to systems programming including low-level programming techniques."),
            new Course(15, "ENGR 3300", "Advanced Engineering Mathematics", [], [], "4", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(16, "EE 3320", "Digital Circuits", [], [], "4", "Focuses on communication skills necessary for engineers. Includes technical writing and presentation skills."),
            new Course(34, "EE 3310", "Electronic Devices", ["MATH 2414", "CS 2305", "MATH 2418"], [], "4", "Basics of probability and statistics with computer science and software engineering applications."),
            new Course(51, "CHEM 1311/1111", "General Chemistry and Lab", [], [], "4", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 5--------------------
            new Course(17, "EE 3202", "Fundamentals II Lab", [], [], "5", "Covers software engineering principles and practices. Focuses on design, implementation, and testing of software."),
            new Course(18, "EE 3311", "Electronic Circuits", ["CS 2305", "PHYS 2326/2126"], [], "5", "Study of digital logic and computer design principles with lab."),
            new Course(19, "EE 3161", "Social Issues and Ethics in Engineering", [], [], "5", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(20, "ECS 2390", "Professional and Technical Comm.", [], [], "5", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(35, "EE 3302", "Signals and Systems", ["CS 2336", "CS 2305", "CS 2340"], [], "5", "NONE."),
            new Course(24, "CORE", "CORE", [], [], "5", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 6--------------------
            new Course(22, "EE 4310", "Embedded Systems", [], ["CS 3345", "CS 3354"], "6", "NONE."),
            new Course(23, "EE 4310", "Systems and Controls", ["CS 3345", "CS 2305"], [], "6", "Study of advanced algorithms and their design and analysis."),
            new Course(36, "CORE", "CORE", [], [], "6", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(37, "EE 42XX", "EE Elective Lab", [], [], "6", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(24, "CORE", "CORE", [], [], "7", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 7--------------------
            new Course(25, "EE 4301", "Electromagnetic Engineering", ["CS 2305"], [], "7", "Introduction to automata theory and formal languages."),
            new Course(26, "EE 4388", "Senior Design Project I", ["CS 3345"], [], "7", "Introduction to databse systems."),
            new Course(38, "EE Technical Elective", "Technical Elective", [], [], "7", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(39, "EE Technical Elective", "Technical Elective", [], [], "7", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(27, "CORE", "CORE", [], [], "7", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 8--------------------
            new Course(28, "EE 4389", "Computer Science Project", ["CS 4386"], [], "8", "Capstone project course. Students design and implement a significant computer science project."),
            new Course(29, "EE Technical Elective", "Technical Elective", [], [], "8", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(30, "Free Elective", "Free Elective", [], [], "8", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(40, "Free Elective", "Free Elective", [], [], "8", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(69, "EE Technical Elective", "Technical Elective", [], [], "8", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(50, "Free Elective", "Free Elective", [], [], "8", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
        ],

        getCourseById: function (id) {
            return this.courses.find(course => course.id === id);
        },

        getCourseByName: function (name) {
            return this.courses.find(course => course.name === name);
        },

        getCoursesBySemester: function (semester) {
            return this.courses.filter(course => course.semester === semester);
        },

        getPrerequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.prerequisites.flatMap(prereqId =>
                [prereqId, ...this.getPrerequisiteSequence(prereqId)]
            );
        },

        getCorequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.corequisites.flatMap(coreqId =>
                [coreqId, ...this.getCorequisiteSequence(coreqId)]
            );
        },

        getPostrequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.postrequisites.flatMap(postreqId =>
                [postreqId, ...this.getPostrequisiteSequence(postreqId)]
            );
        }
    };

    return courseData;
}