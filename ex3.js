const studentList =[

    {
    
        firstName:"Allan",
    
        lastName:"Able",
    
        scores:[95,85,92,98]
    
    },
    
    {
    
        firstName:"Cindy",
    
        astName:"Chase",
    
        scores:[95,90,92,98]
    
    },
    
    {
    
        firstName:"Charles",
    
        lastName:"Chips",
    
        scores:[88,99,90]
    
    }
    
    ];
    
    const studentListUpdated = (scores) => {
        const min = Math.min(...scores);
        const max = Math.max(...scores);
        const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return { min, max, avg };
      };
      
      const filteredStudents = studentList.filter((student) => studentList.lastName.startsWith("C"));
      
      const results = filteredStudents.map((student) => {
        const { firstName, lastName, scores } = student;
        const stats = studentListUpdated(scores);
        return {
          firstName,
          lastName,
          ...stats,
        };
      });
      
      console.log(results);