import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  time: string;
  isActive: boolean;
  title: string;
  subtitle: string;
}

export default function NotificationComponent() {
  const notifications: TimelineItem[] = [
    {
      time: "2 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
    {
      time: "2 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: true,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Application | MYCRM",
    },
    {
      time: "4 hrs",
      isActive: false,
      title: "admin_branch has updated",
      subtitle: "Harry Handoko - Contact | MYCRM",
    },
  ];

  return (
    <Card className="w-full h-full pb-5">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-center">
          NOTIFICATION
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:gap-6 max-h-[500px] overflow-y-scroll ">
        {notifications.map((item, index) => (
          <div key={index} className="grid grid-cols-[auto,1fr] gap-2 sm:gap-4">
            <div className="text-xs sm:text-2xl text-muted-foreground whitespace-nowrap">
              {item.time}
            </div>
            <div className="relative pl-4 sm:pl-6">
              <div
                className={`absolute left-0 top-2 h-4 w-4 rounded-full ${
                  item.isActive ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              {index !== notifications.length - 1 && (
                <div className="absolute left-1.5 top-6 h-full w-[2px] bg-gray-200" />
              )}
              <div className="grid gap-1">
                <h3 className="text-xs sm:text-2xl font-medium leading-none">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-2xl text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
