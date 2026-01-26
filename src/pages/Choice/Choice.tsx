import { useNavigate } from "react-router";

const items = [
  { id: 1, title: "Products", route: "/dashboard/add-product" },
  { id: 2, title: "Categories", route: "/dashboard/add-categories" },
];

export default function Choice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 bg-[#eaf0ec] dark:bg-[#0f172a]">
      <div className="grid gap-6 
        grid-cols-2 
        sm:grid-cols-3 
        lg:grid-cols-4">
        
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.route)}
            className="
              cursor-pointer
              flex items-center justify-center
              h-40 rounded-2xl
              bg-[#eaf0ec]
              shadow-[8px_8px_16px_#cfd8d3,-8px_-8px_16px_#ffffff]
              hover:shadow-[inset_6px_6px_12px_#cfd8d3,inset_-6px_-6px_12px_#ffffff]
              transition-all duration-300

              dark:bg-[#0f172a]
              dark:shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1e293b]
              dark:hover:shadow-[inset_6px_6px_12px_#020617,inset_-6px_-6px_12px_#1e293b]
            "
          >
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {item.title}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
}
