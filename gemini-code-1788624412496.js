/**
 * DATA ENGINE: GATE 2027 Syllabus & 117-Day Pre-populated Study Schedule
 * Date Range: September 6, 2026 to December 31, 2026
 * Subject Sequence: Programming in C -> Data Structures -> Algorithms -> Operating Systems 
 * -> DBMS -> Computer Networks -> COA -> Digital Logic -> TOC -> Compiler Design 
 * -> Engineering Mathematics -> Full Revision -> PYQs -> Mock Tests
 */

const SYLLABUS_DATA = [
  // Subject 1: Programming in C (10 Days)
  { day: 1, date: "2026-09-06", subject: "Programming in C", topic: "C Basics, Data Types, Variables & Operators", diff: "Beginner", time: "3.5 Hours" },
  { day: 2, date: "2026-09-07", subject: "Programming in C", topic: "Control Statements, Conditionals & Loops", diff: "Beginner", time: "3.5 Hours" },
  { day: 3, date: "2026-09-08", subject: "Programming in C", topic: "Functions, Scope Rules & Parameter Passing", diff: "Beginner", time: "3.5 Hours" },
  { day: 4, date: "2026-09-09", subject: "Programming in C", topic: "Recursion - Basics & Linear Recursion", diff: "Intermediate", time: "4.0 Hours" },
  { day: 5, date: "2026-09-10", subject: "Programming in C", topic: "Recursion - Tree, Tail & Nested Recursion", diff: "Intermediate", time: "4.0 Hours" },
  { day: 6, date: "2026-09-11", subject: "Programming in C", topic: "Arrays, String Manipulation & Memory Layout", diff: "Intermediate", time: "4.0 Hours" },
  { day: 7, date: "2026-09-12", subject: "Programming in C", topic: "Pointers & Pointer Arithmetic", diff: "Advanced", time: "4.5 Hours" },
  { day: 8, date: "2026-09-13", subject: "Programming in C", topic: "Function Pointers & Dynamic Memory Allocation", diff: "Advanced", time: "4.5 Hours" },
  { day: 9, date: "2026-09-14", subject: "Programming in C", topic: "Structures, Unions & Bit-Fields", diff: "Advanced", time: "4.0 Hours" },
  { day: 10, date: "2026-09-15", subject: "Programming in C", topic: "C Programming Consolidation & Problem Solving", diff: "Advanced", time: "4.0 Hours" },

  // Subject 2: Data Structures (10 Days)
  { day: 11, date: "2026-09-16", subject: "Data Structures", topic: "Arrays & Dynamic Array Implementations", diff: "Beginner", time: "3.5 Hours" },
  { day: 12, date: "2026-09-17", subject: "Data Structures", topic: "Singly, Doubly & Circular Linked Lists", diff: "Beginner", time: "3.5 Hours" },
  { day: 13, date: "2026-09-18", subject: "Data Structures", topic: "Stacks: Array & Linked List Implementations", diff: "Beginner", time: "3.5 Hours" },
  { day: 14, date: "2026-09-19", subject: "Data Structures", topic: "Queues, Circular Queues & Deques", diff: "Intermediate", time: "4.0 Hours" },
  { day: 15, date: "2026-09-20", subject: "Data Structures", topic: "Binary Trees & Tree Traversals (In/Pre/Post)", diff: "Intermediate", time: "4.0 Hours" },
  { day: 16, date: "2026-09-21", subject: "Data Structures", topic: "Binary Search Trees (BST) Operations & Properties", diff: "Intermediate", time: "4.0 Hours" },
  { day: 17, date: "2026-09-22", subject: "Data Structures", topic: "Binary Heaps & Priority Queues", diff: "Advanced", time: "4.5 Hours" },
  { day: 18, date: "2026-09-23", subject: "Data Structures", topic: "Graph Representations: Adjacency Matrix & Lists", diff: "Advanced", time: "4.5 Hours" },
  { day: 19, date: "2026-09-24", subject: "Data Structures", topic: "Advanced Tree Structures & Expression Trees", diff: "Advanced", time: "4.5 Hours" },
  { day: 20, date: "2026-09-25", subject: "Data Structures", topic: "Data Structures GATE Problem-Solving Intensive", diff: "Advanced", time: "4.5 Hours" },

  // Subject 3: Algorithms (10 Days)
  { day: 21, date: "2026-09-26", subject: "Algorithms", topic: "Asymptotic Notation (Big-O, Omega, Theta)", diff: "Beginner", time: "3.5 Hours" },
  { day: 22, date: "2026-09-27", subject: "Algorithms", topic: "Searching Algorithms & Hashing Techniques", diff: "Beginner", time: "3.5 Hours" },
  { day: 23, date: "2026-09-28", subject: "Algorithms", topic: "Sorting Algorithms: Bubble, Selection, Insertion", diff: "Beginner", time: "3.5 Hours" },
  { day: 24, date: "2026-09-29", subject: "Algorithms", topic: "Divide & Conquer: Merge Sort & Quick Sort", diff: "Intermediate", time: "4.0 Hours" },
  { day: 25, date: "2026-09-30", subject: "Algorithms", topic: "Greedy Algorithms: Knapsack, Huffman Coding", diff: "Intermediate", time: "4.0 Hours" },
  { day: 26, date: "2026-10-01", subject: "Algorithms", topic: "Dynamic Programming: Matrix Chain, LCS", diff: "Intermediate", time: "4.5 Hours" },
  { day: 27, date: "2026-10-02", subject: "Algorithms", topic: "Graph Traversals: BFS & DFS Applications", diff: "Advanced", time: "4.5 Hours" },
  { day: 28, date: "2026-10-03", subject: "Algorithms", topic: "Minimum Spanning Trees: Prim's & Kruskal's", diff: "Advanced", time: "4.5 Hours" },
  { day: 29, date: "2026-10-04", subject: "Algorithms", topic: "Shortest Path Algorithms: Dijkstra & Bellman-Ford", diff: "Advanced", time: "4.5 Hours" },
  { day: 30, date: "2026-10-05", subject: "Algorithms", topic: "Algorithm Complexity Analysis & Recurrences", diff: "Advanced", time: "4.5 Hours" },

  // Subject 4: Operating Systems (10 Days)
  { day: 31, date: "2026-10-06", subject: "Operating Systems", topic: "OS Structures, System Calls & Execution Modes", diff: "Beginner", time: "3.5 Hours" },
  { day: 32, date: "2026-10-07", subject: "Operating Systems", topic: "Process Management, PCB & Threads", diff: "Beginner", time: "3.5 Hours" },
  { day: 33, date: "2026-10-08", subject: "Operating Systems", topic: "CPU Scheduling Algorithms (FCFS, SJF, RR)", diff: "Beginner", time: "4.0 Hours" },
  { day: 34, date: "2026-10-09", subject: "Operating Systems", topic: "Inter-Process Communication (IPC)", diff: "Intermediate", time: "4.0 Hours" },
  { day: 35, date: "2026-10-10", subject: "Operating Systems", topic: "Concurrency, Semaphores & Mutex Locks", diff: "Intermediate", time: "4.5 Hours" },
  { day: 36, date: "2026-10-11", subject: "Operating Systems", topic: "Classical Sync Problems (Producer-Consumer, Readers-Writers)", diff: "Intermediate", time: "4.5 Hours" },
  { day: 37, date: "2026-10-12", subject: "Operating Systems", topic: "Deadlocks: Prevention, Avoidance & Banker's Algorithm", diff: "Advanced", time: "4.5 Hours" },
  { day: 38, date: "2026-10-13", subject: "Operating Systems", topic: "Memory Management: Paging & Segmentation", diff: "Advanced", time: "4.5 Hours" },
  { day: 39, date: "2026-10-14", subject: "Operating Systems", topic: "Virtual Memory, Page Replacement & Thrashing", diff: "Advanced", time: "4.5 Hours" },
  { day: 40, date: "2026-10-15", subject: "Operating Systems", topic: "File Systems & Disk Scheduling Algorithms", diff: "Advanced", time: "4.0 Hours" },

  // Subject 5: Databases (DBMS) (10 Days)
  { day: 41, date: "2026-10-16", subject: "DBMS", topic: "ER-Model, Entities, Relationships & ER-Diagrams", diff: "Beginner", time: "3.5 Hours" },
  { day: 42, date: "2026-10-17", subject: "DBMS", topic: "Relational Model & Integrity Constraints", diff: "Beginner", time: "3.5 Hours" },
  { day: 43, date: "2026-10-18", subject: "DBMS", topic: "Relational Algebra: Select, Project, Joins", diff: "Beginner", time: "4.0 Hours" },
  { day: 44, date: "2026-10-19", subject: "DBMS", topic: "Tuple Relational Calculus & Domain Calculus", diff: "Intermediate", time: "4.0 Hours" },
  { day: 45, date: "2026-10-20", subject: "DBMS", topic: "SQL Queries, Nested Queries & Aggregations", diff: "Intermediate", time: "4.0 Hours" },
  { day: 46, date: "2026-10-21", subject: "DBMS", topic: "Functional Dependencies & Attribute Closure", diff: "Intermediate", time: "4.0 Hours" },
  { day: 47, date: "2026-10-22", subject: "DBMS", topic: "Normalization: 1NF, 2NF, 3NF & BCNF", diff: "Advanced", time: "4.5 Hours" },
  { day: 48, date: "2026-10-23", subject: "DBMS", topic: "Transactions, ACID Properties & Schedules", diff: "Advanced", time: "4.5 Hours" },
  { day: 49, date: "2026-10-24", subject: "DBMS", topic: "Concurrency Control & Serializability Testing", diff: "Advanced", time: "4.5 Hours" },
  { day: 50, date: "2026-10-25", subject: "DBMS", topic: "File Organization, Indexing, B & B+ Trees", diff: "Advanced", time: "4.5 Hours" },

  // Subject 6: Computer Networks (10 Days)
  { day: 51, date: "2026-10-26", subject: "Computer Networks", topic: "Principles of Layering & ISO/OSI vs TCP/IP", diff: "Beginner", time: "3.5 Hours" },
  { day: 52, date: "2026-10-27", subject: "Computer Networks", topic: "Switching: Circuit, Packet & Virtual Circuit", diff: "Beginner", time: "3.5 Hours" },
  { day: 53, date: "2026-10-28", subject: "Computer Networks", topic: "Data Link Layer: Error Detection & Correction Methods", diff: "Beginner", time: "4.0 Hours" },
  { day: 54, date: "2026-10-29", subject: "Computer Networks", topic: "Medium Access Control Protocols & Ethernet", diff: "Intermediate", time: "4.0 Hours" },
  { day: 55, date: "2026-10-30", subject: "Computer Networks", topic: "IPv4 Addressing, CIDR Notation & Subnetting", diff: "Intermediate", time: "4.5 Hours" },
  { day: 56, date: "2026-10-31", subject: "Computer Networks", topic: "IP Packet Fragmentation & Network Address Translation (NAT)", diff: "Intermediate", time: "4.0 Hours" },
  { day: 57, date: "2026-11-01", subject: "Computer Networks", topic: "Routing Algorithms: Distance Vector & Link State Routing", diff: "Advanced", time: "4.5 Hours" },
  { day: 58, date: "2026-11-02", subject: "Computer Networks", topic: "TCP Protocol: Flow Control & Congestion Control", diff: "Advanced", time: "4.5 Hours" },
  { day: 59, date: "2026-11-03", subject: "Computer Networks", topic: "UDP Protocol, Socket API Basics", diff: "Advanced", time: "4.0 Hours" },
  { day: 60, date: "2026-11-04", subject: "Computer Networks", topic: "Application Layer Protocols: DNS & HTTP", diff: "Advanced", time: "4.0 Hours" },

  // Subject 7: Computer Organization & Architecture (10 Days)
  { day: 61, date: "2026-11-05", subject: "COA", topic: "Machine Instructions & Addressing Modes", diff: "Beginner", time: "3.5 Hours" },
  { day: 62, date: "2026-11-06", subject: "COA", topic: "ALU Design & Computer Arithmetic Operations", diff: "Beginner", time: "4.0 Hours" },
  { day: 63, date: "2026-11-07", subject: "COA", topic: "Control Unit Design: Hardwired Control Unit", diff: "Beginner", time: "4.0 Hours" },
  { day: 64, date: "2026-11-08", subject: "COA", topic: "Control Unit Design: Microprogrammed Control Unit", diff: "Intermediate", time: "4.0 Hours" },
  { day: 65, date: "2026-11-09", subject: "COA", topic: "Memory Hierarchy & Main Memory Interfacing", diff: "Intermediate", time: "4.0 Hours" },
  { day: 66, date: "2026-11-10", subject: "COA", topic: "Cache Memory Mapping Techniques & Performance", diff: "Intermediate", time: "4.5 Hours" },
  { day: 67, date: "2026-11-11", subject: "COA", topic: "I/O Interface: Interrupts & DMA Control", diff: "Advanced", time: "4.0 Hours" },
  { day: 68, date: "2026-11-12", subject: "COA", topic: "Instruction Pipelining & Execution Cycles", diff: "Advanced", time: "4.5 Hours" },
  { day: 69, date: "2026-11-13", subject: "COA", topic: "Pipeline Hazards: Structural, Data & Control Hazards", diff: "Advanced", time: "4.5 Hours" },
  { day: 70, date: "2026-11-14", subject: "COA", topic: "Pipelining Performance, Speedup & Throughput Analysis", diff: "Advanced", time: "4.5 Hours" },

  // Subject 8: Digital Logic (8 Days)
  { day: 71, date: "2026-11-15", subject: "Digital Logic", topic: "Boolean Algebra & Boolean Functions Minimization", diff: "Beginner", time: "3.5 Hours" },
  { day: 72, date: "2026-11-16", subject: "Digital Logic", topic: "Karnaugh Map (K-Map) & Tabular Method (Quine-McCluskey)", diff: "Beginner", time: "4.0 Hours" },
  { day: 73, date: "2026-11-17", subject: "Digital Logic", topic: "Combinational Circuits: Adders, Subtractors, Multiplexers", diff: "Intermediate", time: "4.0 Hours" },
  { day: 74, date: "2026-11-18", subject: "Digital Logic", topic: "Combinational Circuits: Decoders & Encoders", diff: "Intermediate", time: "4.0 Hours" },
  { day: 75, date: "2026-11-19", subject: "Digital Logic", topic: "Sequential Circuits: Latches & Flip-Flops (SR, JK, D, T)", diff: "Intermediate", time: "4.5 Hours" },
  { day: 76, date: "2026-11-20", subject: "Digital Logic", topic: "Registers & Counters (Synchronous & Asynchronous)", diff: "Advanced", time: "4.5 Hours" },
  { day: 77, date: "2026-11-21", subject: "Digital Logic", topic: "Number Representations: Fixed & Floating Point Arithmetic", diff: "Advanced", time: "4.0 Hours" },
  { day: 78, date: "2026-11-22", subject: "Digital Logic", topic: "Digital Logic GATE Numerical Problem Solving", diff: "Advanced", time: "4.5 Hours" },

  // Subject 9: Theory of Computation (TOC) (9 Days)
  { day: 79, date: "2026-11-23", subject: "Theory of Computation", topic: "DFA & NFA Design, NFA to DFA Conversion", diff: "Beginner", time: "4.0 Hours" },
  { day: 80, date: "2026-11-24", subject: "Theory of Computation", topic: "Regular Expressions & Finite Automata Minimization", diff: "Beginner", time: "4.0 Hours" },
  { day: 81, date: "2026-11-25", subject: "Theory of Computation", topic: "Pumping Lemma for Regular Languages", diff: "Intermediate", time: "4.0 Hours" },
  { day: 82, date: "2026-11-26", subject: "Theory of Computation", topic: "Context-Free Grammars (CFG) & Parse Trees", diff: "Intermediate", time: "4.0 Hours" },
  { day: 83, date: "2026-11-27", subject: "Theory of Computation", topic: "Push-Down Automata (PDA) Design & Equivalence", diff: "Intermediate", time: "4.5 Hours" },
  { day: 84, date: "2026-11-28", subject: "Theory of Computation", topic: "Pumping Lemma for CFLs & Closure Properties", diff: "Advanced", time: "4.5 Hours" },
  { day: 85, date: "2026-11-29", subject: "Theory of Computation", topic: "Turing Machines Construction & Variants", diff: "Advanced", time: "4.5 Hours" },
  { day: 86, date: "2026-11-30", subject: "Theory of Computation", topic: "Undecidability, Halting Problem & Reduction", diff: "Advanced", time: "4.5 Hours" },
  { day: 87, date: "2026-12-01", subject: "Theory of Computation", topic: "Chomsky Hierarchy & Language Classification", diff: "Advanced", time: "4.0 Hours" },

  // Subject 10: Compiler Design (7 Days)
  { day: 88, date: "2026-12-02", subject: "Compiler Design", topic: "Phases of Compiler & Lexical Analysis (Tokens, Flex)", diff: "Beginner", time: "3.5 Hours" },
  { day: 89, date: "2026-12-03", subject: "Compiler Design", topic: "Parsing: Top-Down Parsing & LL(1) Grammars", diff: "Beginner", time: "4.0 Hours" },
  { day: 90, date: "2026-12-04", subject: "Compiler Design", topic: "Parsing: Bottom-Up Parsing (LR(0), SLR(1), LALR(1), CLR(1))", diff: "Intermediate", time: "4.5 Hours" },
  { day: 91, date: "2026-12-05", subject: "Compiler Design", topic: "Syntax-Directed Translation (SDT) & Attributes", diff: "Intermediate", time: "4.0 Hours" },
  { day: 92, date: "2026-12-06", subject: "Compiler Design", topic: "Intermediate Code Generation & Runtime Environments", diff: "Intermediate", time: "4.0 Hours" },
  { day: 93, date: "2026-12-07", subject: "Compiler Design", topic: "Local Optimization & Basic Blocks Analysis", diff: "Advanced", time: "4.0 Hours" },
  { day: 94, date: "2026-12-08", subject: "Compiler Design", topic: "Data Flow Analysis: Constant Prop, Liveness Analysis & CSE", diff: "Advanced", time: "4.5 Hours" },

  // Subject 11: Engineering Mathematics (11 Days)
  { day: 95, date: "2026-12-09", subject: "Engineering Mathematics", topic: "Discrete Math: Propositional & First Order Logic", diff: "Beginner", time: "4.0 Hours" },
  { day: 96, date: "2026-12-10", subject: "Engineering Mathematics", topic: "Discrete Math: Sets, Relations, Functions & Lattice Theory", diff: "Beginner", time: "4.0 Hours" },
  { day: 97, date: "2026-12-11", subject: "Engineering Mathematics", topic: "Discrete Math: Groups, Monoids & Graph Theory", diff: "Intermediate", time: "4.0 Hours" },
  { day: 98, date: "2026-12-12", subject: "Engineering Mathematics", topic: "Combinatorics: Counting, Recurrence Relations & Gen Functions", diff: "Intermediate", time: "4.5 Hours" },
  { day: 99, date: "2026-12-13", subject: "Engineering Mathematics", topic: "Linear Algebra: Matrices, Systems of Linear Equations", diff: "Beginner", time: "4.0 Hours" },
  { day: 100, date: "2026-12-14", subject: "Engineering Mathematics", topic: "Linear Algebra: Eigenvalues, Eigenvectors & LU Decomposition", diff: "Intermediate", time: "4.5 Hours" },
  { day: 101, date: "2026-12-15", subject: "Engineering Mathematics", topic: "Calculus: Limits, Continuity & Differentiability", diff: "Beginner", time: "4.0 Hours" },
  { day: 102, date: "2026-12-16", subject: "Engineering Mathematics", topic: "Calculus: Maxima & Minima, Mean Value Theorem & Integration", diff: "Intermediate", time: "4.0 Hours" },
  { day: 103, date: "2026-12-17", subject: "Engineering Mathematics", topic: "Probability: Random Variables, Uniform, Normal, Exponential", diff: "Intermediate", time: "4.0 Hours" },
  { day: 104, date: "2026-12-18", subject: "Engineering Mathematics", topic: "Probability: Poisson & Binomial Distributions, Statistics", diff: "Advanced", time: "4.0 Hours" },
  { day: 105, date: "2026-12-19", subject: "Engineering Mathematics", topic: "Probability: Conditional Probability & Bayes Theorem", diff: "Advanced", time: "4.5 Hours" },

  // Phase 12, 13, 14: Final Revisions & Testing (12 Days)
  { day: 106, date: "2026-12-20", subject: "Full Revision", topic: "Full Revision Phase: C, Data Structures & Algorithms", diff: "Advanced", time: "5.0 Hours" },
  { day: 107, date: "2026-12-21", subject: "Full Revision", topic: "Full Revision Phase: Operating Systems & DBMS", diff: "Advanced", time: "5.0 Hours" },
  { day: 108, date: "2026-12-22", subject: "Full Revision", topic: "Full Revision Phase: Computer Networks & COA", diff: "Advanced", time: "5.0 Hours" },
  { day: 109, date: "2026-12-23", subject: "Full Revision", topic: "Full Revision Phase: TOC, Compiler Design & Digital Logic", diff: "Advanced", time: "5.0 Hours" },
  { day: 110, date: "2026-12-24", subject: "Full Revision", topic: "Full Revision Phase: Engineering Mathematics Complete Review", diff: "Advanced", time: "5.0 Hours" },
  
  { day: 111, date: "2026-12-25", subject: "Previous Year Questions", topic: "PYQ Marathon: 2020 - 2022 Core CS Questions", diff: "Advanced", time: "5.5 Hours" },
  { day: 112, date: "2026-12-26", subject: "Previous Year Questions", topic: "PYQ Marathon: 2023 - 2025 Core CS Questions", diff: "Advanced", time: "5.5 Hours" },
  { day: 113, date: "2026-12-27", subject: "Previous Year Questions", topic: "PYQ Marathon: Engineering Math & Aptitude Special", diff: "Advanced", time: "5.5 Hours" },
  
  { day: 114, date: "2026-12-28", subject: "Mock Tests", topic: "Full Length Mock Test 1 & Detailed Error Analysis", diff: "Advanced", time: "6.0 Hours" },
  { day: 115, date: "2026-12-29", subject: "Mock Tests", topic: "Full Length Mock Test 2 & Detailed Error Analysis", diff: "Advanced", time: "6.0 Hours" },
  { day: 116, date: "2026-12-30", subject: "Mock Tests", topic: "Full Length Mock Test 3 & Weak Area Flash Review", diff: "Advanced", time: "6.0 Hours" },
  { day: 117, date: "2026-12-31", subject: "Mock Tests", topic: "Final GATE Strategy, Formulas Review & Exam Readiness", diff: "Advanced", time: "4.0 Hours" }
];

const MOTIVATIONAL_QUOTES = [
  "Consistency beats motivation.",
  "One chapter today saves one week tomorrow.",
  "Small progress every day creates extraordinary results.",
  "Depth over breadth; understand concepts to their core.",
  "Focus on process, the GATE rank will follow.",
  "Discipline is choosing between what you want now and what you want most.",
  "Your future AIR single digit is built in these quiet study hours.",
  "Master the fundamentals, and tricky questions become simple."
];

const BADGES_DEFINITIONS = [
  { id: "first_day", title: "First Study Day", desc: "Complete all tasks on day 1", icon: "🚀" },
  { id: "streak_7", title: "7-Day Streak", desc: "Maintain consistency for 7 days", icon: "🔥" },
  { id: "streak_15", title: "15-Day Streak", desc: "Maintain consistency for 15 days", icon: "⚡" },
  { id: "streak_30", title: "30-Day Streak", desc: "Maintain consistency for 30 days", icon: "👑" },
  { id: "pct_25", title: "25% Milestone", desc: "Complete 25% of the total study program", icon: "🥉" },
  { id: "pct_50", title: "Halfway There", desc: "Complete 50% of the total study program", icon: "🥈" },
  { id: "pct_75", title: "75% Mastery", desc: "Complete 75% of the total study program", icon: "🥇" },
  { id: "pct_100", title: "GATE Ready", desc: "Complete 100% of the study curriculum", icon: "🏆" },
  { id: "no_miss_week", title: "Flawless Week", desc: "Complete 7 consecutive days without missing a task", icon: "🎯" },
  { id: "revision_master", title: "Revision Master", desc: "Complete at least 10 automatic revision sessions", icon: "🧠" }
];