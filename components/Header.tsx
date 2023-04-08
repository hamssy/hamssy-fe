import { useSetAtom } from "jotai";
import { CurrencySelector } from "@/components/CurrencySelector";
import { Account } from "@/components/Account";
import { Logo } from "@/components/Logo";
import { FlyoutMenus } from "@/components/FlyoutMenus";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { mobileMenuOpenAtom, Navigation } from "@/pages";

type Props = {
  navigation: Navigation;
  currencies: string[];
};
export const Header = ({ navigation, currencies }: Props) => {
  const setMobileMenuOpen = useSetAtom(mobileMenuOpenAtom);

  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        {/* Top navigation */}
        <div className="bg-gray-900">
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <CurrencySelector currencies={currencies} />
            <Account />
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <Logo />
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  <FlyoutMenus navigation={navigation} />
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 p-2 text-white"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a href="#" className="ml-2 p-2 text-white">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <Logo />
                </a>

                <div className="flex flex-1 items-center justify-end">
                  <a
                    href="#"
                    className="hidden text-sm font-medium text-white lg:block"
                  >
                    Search
                  </a>

                  <div className="flex items-center lg:ml-8">
                    {/* Help */}
                    <a href="#" className="p-2 text-white lg:hidden">
                      <span className="sr-only">Help</span>
                      <QuestionMarkCircleIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="#"
                      className="hidden text-sm font-medium text-white lg:block"
                    >
                      Help
                    </a>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-white"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-white">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
