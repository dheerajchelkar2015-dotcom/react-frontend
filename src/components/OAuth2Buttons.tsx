import { Button } from "./ui/button";
import { NavLink } from "react-router";

function OAuth2Buttons() {
    return (
        <div>
            <NavLink to={`${import.meta.env.VITE_BASE_URL || 'http://localhost:8083'}/oauth2/authorization/google`}>
                <Button type="button"
                    variant="outline"


className="
          w-full bg-primary rounded-xl  font-semibold
          bg-[#eaf0ec] text-emerald-700
          shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]
          hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
            hover:bg-[#eaf0ec]
  hover:text-emerald-700

          dark:bg-[#0f172a] dark:text-emerald-400
          dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1f2933]
          dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]

          transition-all
        "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5"
                    >
                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.7 7.1 29 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21c11.5 0 20.6-8.1 20.6-21 0-1.4-.1-2.7-.4-3.5z" />
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.7 7.1 29 5 24 5c-7.8 0-14.5 4.2-18.7 9.7z" />
                        <path fill="#4CAF50" d="M24 47c5.3 0 10.2-2 13.9-5.2l-6.4-5.2C29.6 38.2 26.9 39 24 39c-5.3 0-9.8-3.6-11.4-8.5l-6.5 5C10.2 42.4 16.6 47 24 47z" />
                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.5-6.1 6.6l6.4 5.2c-.5.4 8.9-6.5 8.9-18.8 0-1.4-.1-2.7-.4-3.5z" />
                    </svg>
                    Continue with Google
                </Button>
            </NavLink>
        </div>
    )
}

export default OAuth2Buttons;