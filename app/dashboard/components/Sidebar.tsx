import { forwardRef, Ref,useState } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Logo from '../../../media/logo.png'
import Icon from '../../../media/nest site 3 1.png'
import { FaSearch } from "react-icons/fa";


type SideBarProps = {
  showNav: boolean;
};

const SideBar = forwardRef<HTMLDivElement, SideBarProps>((props, ref) => {

  const pathname = usePathname()

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div ref={ref} className="fixed w-56 h-full bg-dark shadow-sm" style={{background:"#15161B"}}>
      <div className="flex justify-center mt-6 mb-4">
        <picture>
        <Image 
                className="h-5 w-auto" 
                src={Logo} 
                alt="NestSite Logo"
                width={160.8} 
                height={60.9} />
        </picture>
      </div>

      <div className="pl-9 py-2 rounded-lg bg-primary mx-5 text-align-center text-gray-200 mb-10">
        Dashboard
      </div>

      <div className="flex items-center mb-4 mx-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-8 rounded-3xl bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:border-primary "style={{background:"#25262B"}}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Link href="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard"
                ? "bg-primary text-white"
                : "text-gray-400 text-hover hover:text-white"
            }`}
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19871 13.0378C3.33337 14.6187 3.33337 16.5257 3.33337 20.3398V22.8749C3.33337 29.3763 3.33337 32.6271 5.28599 34.6468C7.23862 36.6666 10.3813 36.6666 16.6667 36.6666H23.3334C29.6187 36.6666 32.7615 36.6666 34.714 34.6468C36.6667 32.6271 36.6667 29.3763 36.6667 22.8749V20.3398C36.6667 16.5257 36.6667 14.6187 35.8014 13.0378C34.936 11.4569 33.3552 10.4758 30.1934 8.51345L26.86 6.4447C23.5177 4.3704 21.8465 3.33325 20 3.33325C18.1535 3.33325 16.4824 4.3704 13.1401 6.4447L9.80676 8.51347C6.64496 10.4758 5.06404 11.4569 4.19871 13.0378ZM15.7444 25.6624C15.1898 25.2513 14.4069 25.3676 13.9958 25.9223C13.5847 26.4769 13.7011 27.2598 14.2557 27.6708C15.8764 28.8721 17.8584 29.5833 20 29.5833C22.1417 29.5833 24.1237 28.8721 25.7444 27.6708C26.299 27.2598 26.4154 26.4769 26.0042 25.9223C25.5932 25.3676 24.8104 25.2513 24.2557 25.6624C23.0417 26.5621 21.5765 27.0833 20 27.0833C18.4235 27.0833 16.9584 26.5621 15.7444 25.6624Z" fill="white"/>
            </svg>
            </div>
            <div>
              <h2>Overview</h2>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/portfolio">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard/portfolio"
                ? "bg-primary text-white"
                : "text-gray-400 text-hover hover:text-white"
            }`}
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <g clip-path="url(#clip0_346_63)">
                        <path d="M13.3556 5.55602H15.5192C15.6934 5.55602 15.853 5.46203 15.9413 5.31172C17.7545 2.22555 22.2487 2.23094 24.0589 5.31172C24.1472 5.46195 24.3066 5.55602 24.4809 5.55602H26.6448C26.9894 5.55602 27.2251 5.20828 27.0986 4.88766C24.5722 -1.52108 15.4299 -1.52577 12.9017 4.88766C12.7752 5.20836 13.0109 5.55602 13.3556 5.55602Z" fill="#C5C5C5"/>
              <path d="M16.3825 23.4108V20.9843C16.3825 20.5802 16.71 20.2525 17.1142 20.2525H22.8857C23.2897 20.2525 23.6174 20.5801 23.6174 20.9843V23.4108C23.6174 23.7292 23.9174 23.9622 24.2259 23.8834L39.9999 19.8554V10.773C39.9999 8.69999 38.3193 7.01929 36.2462 7.01929H3.75374C1.68054 7.01937 0 8.69999 0 10.773V19.8554L15.774 23.8834C16.0825 23.9623 16.3825 23.7293 16.3825 23.4108Z" fill="#C5C5C5"/>
              <path d="M23.9846 25.4556C23.7685 25.5108 23.6175 25.7053 23.6175 25.9282V28.0317C23.6175 28.4358 23.2899 28.7635 22.8857 28.7635H17.1143C16.7102 28.7635 16.3825 28.4359 16.3825 28.0317V25.9282C16.3825 25.7053 16.2315 25.5107 16.0154 25.4556L0 21.366V36.1669C0 38.2401 1.68054 39.9206 3.75374 39.9206H36.2463C38.3193 39.9206 40 38.2401 40 36.1669V21.366L23.9846 25.4556Z" fill="#C5C5C5"/>
              <path d="M18.3338 21.7161C18.0644 21.7161 17.8459 21.9345 17.8459 22.2039V26.8121C17.8459 27.0816 18.0644 27.3 18.3338 27.3H21.6663C21.9356 27.3 22.1541 27.0816 22.1541 26.8121V22.2039C22.1541 21.9345 21.9356 21.7161 21.6663 21.7161H18.3338Z" fill="#C5C5C5"/>
            </g>
            <defs>
              <clipPath id="clip0_346_63">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
            </div>
            <div>
              <h2>Portfolio</h2>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/storefront">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard/storefront"
              ? "bg-primary text-white"
              : "text-gray-400 text-hover hover:text-white"
          }`}
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path d="M36.2484 14.9686C36.2479 14.95 36.2469 14.9315 36.2456 14.9128C36.2436 14.8841 36.2407 14.8558 36.2368 14.8277C36.2345 14.8116 36.2323 14.7956 36.2294 14.7795C36.2235 14.7464 36.216 14.714 36.2076 14.6819C36.2054 14.6735 36.2043 14.665 36.2019 14.6566L33.961 6.81313C33.8102 6.29167 33.4944 5.83315 33.061 5.50627C32.6276 5.17939 32.1 5.00176 31.5572 5H8.44284C7.9 5.00176 7.37234 5.1794 6.93896 5.50629C6.50558 5.83319 6.18981 6.29173 6.03897 6.8132L3.79807 14.6566C3.79566 14.665 3.79463 14.6735 3.79242 14.6819C3.78395 14.714 3.77651 14.7464 3.7706 14.7795C3.76774 14.7956 3.76549 14.8116 3.76324 14.8277C3.75935 14.8558 3.75641 14.8841 3.75443 14.9128C3.75309 14.9315 3.75206 14.95 3.7516 14.9686C3.75133 14.9792 3.75 14.9894 3.75 15V17.5C3.75008 18.4698 3.97604 19.4262 4.40998 20.2935C4.84392 21.1608 5.4739 21.9151 6.25 22.4966V32.5C6.25076 33.1628 6.51439 33.7983 6.98307 34.2669C7.45175 34.7356 8.08719 34.9992 8.75 35H31.25C31.9128 34.9992 32.5483 34.7356 33.0169 34.2669C33.4856 33.7983 33.7492 33.1628 33.75 32.5V22.4966C34.5261 21.9151 35.1561 21.1608 35.59 20.2935C36.024 19.4262 36.2499 18.4698 36.25 17.5V15C36.25 14.9894 36.2487 14.9792 36.2484 14.9686ZM6.25 16.25H13.75V17.5C13.7504 18.1452 13.5843 18.7795 13.2677 19.3416C12.951 19.9037 12.4947 20.3746 11.9427 20.7086C11.3908 21.0426 10.7619 21.2285 10.1171 21.2482C9.47221 21.268 8.83318 21.1209 8.26183 20.8212C8.17509 20.7539 8.07984 20.6984 7.97855 20.656C7.4489 20.3171 7.013 19.8504 6.71094 19.2989C6.40888 18.7474 6.25037 18.1288 6.25 17.5V16.25ZM23.75 17.5C23.75 18.4946 23.3549 19.4484 22.6517 20.1517C21.9484 20.8549 20.9946 21.25 20 21.25C19.0054 21.25 18.0516 20.8549 17.3483 20.1517C16.6451 19.4484 16.25 18.4946 16.25 17.5V16.25H23.75V17.5ZM32.0206 20.6565C31.92 20.6987 31.8254 20.7539 31.7391 20.8208C31.1678 21.1206 30.5287 21.2679 29.8837 21.2483C29.2388 21.2287 28.6098 21.0429 28.0578 20.7089C27.5057 20.3749 27.0492 19.904 26.7325 19.3418C26.4158 18.7797 26.2496 18.1452 26.25 17.5V16.25H33.75V17.5C33.7496 18.129 33.591 18.7477 33.2888 19.2993C32.9866 19.8509 32.5505 20.3176 32.0206 20.6565Z" fill="#C5C5C5"/>
            </svg>
            </div>
            <div>
              <h2>Storefront</h2>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/masterclass">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard/masterclass"
              ? "bg-primary text-white"
              : "text-gray-400 text-hover hover:text-white"
          }`}
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
          <g clip-path="url(#clip0_289_36)">
                      <path d="M23.0283 9.44833L30.535 16.95L16.9516 30.5333L9.44996 23.0267L23.0283 9.44833ZM18.0183 32.6883L32.685 18.0217C32.9616 17.75 33.135 17.3733 33.135 16.955C33.135 16.5367 32.9633 16.16 32.6866 15.8883L24.0933 7.295C23.8166 7.03167 23.44 6.87 23.0266 6.87C22.6133 6.87 22.2366 7.03167 21.96 7.29667L7.2933 21.9633C7.01663 22.235 6.8433 22.6117 6.8433 23.03C6.8433 23.4483 7.01496 23.825 7.29163 24.0967L15.885 32.69C16.1616 32.9533 16.5383 33.115 16.9516 33.115C17.365 33.115 17.7416 32.9533 18.0183 32.6883ZM39.1233 17.5667L17.5933 39.1217C17.04 39.665 16.2816 40 15.445 40C14.6083 40 13.85 39.665 13.2966 39.1217L10.3066 36.1333C11.1016 35.3133 11.59 34.1933 11.59 32.9583C11.59 30.4367 9.54496 28.3917 7.0233 28.3917C5.78996 28.3917 4.66996 28.8817 3.8483 29.6767L3.84996 29.675L0.881629 26.685C0.338296 26.1317 0.0032959 25.3733 0.0032959 24.5367C0.0032959 23.7 0.338296 22.9417 0.881629 22.3883L22.4133 0.878333C22.9666 0.335 23.725 0 24.5616 0C25.3983 0 26.1566 0.335 26.71 0.878333L29.6783 3.84667C28.82 4.67833 28.2866 5.84167 28.2866 7.12833C28.2866 9.65 30.3316 11.695 32.8533 11.695C34.1416 11.695 35.305 11.1617 36.135 10.3033L36.1366 10.3017L39.1266 13.27C39.67 13.8233 40.005 14.5817 40.005 15.4183C40.005 16.255 39.67 17.0133 39.1266 17.5667H39.1233Z" fill="#C5C5C5"/>
               </g>
            <defs>
            <clipPath id="clip0_289_36">
            <rect width="40" height="40" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
            <div>
              <h2>Bookings</h2>
            </div>
          </div>
        </Link>
        <Link href="/dashboard/masterclass">
          <div
            className={`pl-6 py-3 mx-5 rounded-3xl text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashboard/masterclass"
              ? "bg-primary text-white"
              : "text-gray-400 text-hover hover:text-white"
          }`}
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
              <g clip-path="url(#clip0_345_11)">
                <path d="M19.9218 25.9025C18.9753 25.9025 18.049 25.7258 17.1688 25.3771L5.66943 20.8184C5.66943 23.3581 5.66943 27.1563 5.66943 28.1686C5.66943 31.7357 12.0501 34.6267 19.922 34.6267C27.7939 34.6267 34.1752 31.7357 34.1752 28.1686V20.8181L22.6747 25.3771C21.7945 25.7258 20.8682 25.9025 19.9218 25.9025Z" fill="#C5C5C5"/>
                <path d="M42.0632 13.3713L21.8942 5.3765C20.6275 4.8745 19.2167 4.8745 17.9497 5.3765L-2.21904 13.3713C-2.69055 13.5581 -3 14.014 -3 14.5211C-3 15.0284 -2.69033 15.484 -2.21904 15.6711L0.604285 16.7901V24.7957C-0.022866 25.2232 -0.434768 25.9434 -0.434768 26.7597C-0.434768 27.5074 -0.0891213 28.1742 0.450696 28.6097L-0.40911 32.7373C-0.524408 33.2911 -0.38435 33.8676 -0.0272224 34.3064C0.329676 34.7453 0.865359 35 1.43085 35H2.45068C3.0164 35 3.55185 34.7453 3.90875 34.3064C4.26565 33.8676 4.40571 33.2911 4.29064 32.7373L3.43058 28.6097C3.97063 28.1742 4.3163 27.5072 4.3163 26.7597C4.3163 25.9432 3.9044 25.2232 3.27724 24.7957V17.8496L17.8853 23.6407C19.1937 24.1594 20.6504 24.1594 21.9588 23.6407L42.0637 15.6711C42.5352 15.4843 42.8446 15.0284 42.8446 14.5211C42.8444 14.014 42.5347 13.5581 42.0632 13.3713Z" fill="#C5C5C5"/>
              </g>
              <defs>
                <clipPath id="clip0_345_11">
                  <rect width="40" height="40" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </div>
            <div>
              <h2>Masterclass</h2>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-20 admin-foot">
      <div className="mt-2">
        <svg xmlns="http://www.w3.org/2000/svg"className="cursor-pointer" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_66_53)">
    <mask id="mask0_66_53" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
      <path d="M0 0H30V30H0V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_66_53)">
      <path d="M6.25 15.0001H1.25M28.75 15.0001H23.75M8.8125 8.81259L5.2775 5.27759M24.7225 24.7226L21.1875 21.1876M8.8125 21.1876L5.2775 24.7226M24.7225 5.27759L21.1875 8.81259" stroke="#C5C5C5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M15 20C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15C20 13.6739 19.4732 12.4021 18.5355 11.4645C17.5979 10.5268 16.3261 10 15 10C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15C10 16.3261 10.5268 17.5979 11.4645 18.5355C12.4021 19.4732 13.6739 20 15 20Z" fill="black" fill-opacity="0.16" stroke="#C5C5C5" stroke-width="4" stroke-miterlimit="10"/>
      <path d="M15 23.75V28.75M15 1.25V6.25" stroke="#C5C5C5" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_66_53">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <hr className="border-gray-500 w-20 my-5" />
      
        <div className="mt-2">
          <picture>
            <Image
              className="h-5 w-auto"
              src={Icon}
              alt="NestSite Logo"
              width={120.8}
              height={40.9}
            />
          </picture>
        </div>
        <h2 className="text-gray-400 mt-2 ">support@nestsite.co</h2>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
