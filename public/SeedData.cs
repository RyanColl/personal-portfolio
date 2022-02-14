using csvGoogleCharts.Models;

namespace csvGoogleCharts.Data.Migrations
{
    public class SeedData
    {
        public static void Initialize(IApplicationBuilder app)
    {
        using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope()) {
            var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();
            context.Database.EnsureCreated();


            // Look for any students.
            if (context.Students.Any()) {
                return;   // DB has already been seeded
            }


            var students = GetStudents();
            context.Students.AddRange(students);
            context.SaveChanges();
        }
    }
        public static Student[] GetStudents()
	{
    	// Process CSV
    	List<Student> students = new List<Student>();
    	string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "students.csv");   	 
    	using (StreamReader sr = File.OpenText(path))
    	{
        	string? line;
        	bool isFirstLine = true;

        	while ((line = sr.ReadLine()) != null)
        	{
            	// 2,Ann,Fay,Mining => ["2", "Ann", "Fay", "Mining"]
            	string[] lineInfo = line.Split(',');
            	if (!isFirstLine)
            	{
                	string[] studentInfo = lineInfo;
                	Student student = new Student()
                	{
                    	Id = studentInfo[0],
                    	FirstName = studentInfo[1],
                    	LastName = studentInfo[2],
                    	Department = studentInfo[3]
                	};
                	students.Add(student);
            	}
            	isFirstLine = false;
        	}
    	}


    	return students.ToArray();
	}
    }
}