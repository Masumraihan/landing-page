import { Switch } from '@headlessui/react'

const ThemeSwitch = ({ setDark, dark }) => {
    const handleChangeTheme = () => {
        setDark(prevDark => !prevDark);
    }

    return (
        <div className="py-14">
            <Switch
                checked={dark}
                onChange={handleChangeTheme}
                className={`${!dark ? 'bg-black' : 'bg-purple-200'}
            relative inline-flex h-[30px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${dark ? 'translate-x-7' : 'translate-x-0'}
              pointer-events-none inline-block h-[26px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
};

export default ThemeSwitch;
