import { AppProvider, useApp } from "./context/AppContext"
import Toast from "./components/Toast"
import SplashScreen from "./screens/SplashScreen"
import OnboardingScreen from "./screens/OnboardingScreen"
import SignupScreen from "./screens/SignupScreen"
import OtpScreen from "./screens/OtpScreen"
import CreatePinScreen from "./screens/CreatePinScreen"
import LoginScreen from "./screens/LoginScreen"
import PinLoginScreen from "./screens/PinLoginScreen"
import ForgotScreen from "./screens/ForgotScreen"
import HomeScreen from "./screens/HomeScreen"
import TransferScreen from "./screens/TransferScreen"
import AddMoneyScreen from "./screens/AddMoneyScreen"
import SuccessScreen from "./screens/SuccessScreen"
import AirtimeScreen from "./screens/AirtimeScreen"
import HistoryScreen from "./screens/HistoryScreen"
import RewardsScreen from "./screens/RewardsScreen"
import FinanceScreen from "./screens/FinanceScreen"
import CardsScreen from "./screens/CardsScreen"
import ProfileScreen from "./screens/ProfileScreen"
import NotificationsScreen from "./screens/NotificationsScreen"

const SCREENS = {
  splash: SplashScreen,
  onboarding: OnboardingScreen,
  signup: SignupScreen,
  otp: OtpScreen,
  "create-pin": CreatePinScreen,
  login: LoginScreen,
  "pin-login": PinLoginScreen,
  forgot: ForgotScreen,
  home: HomeScreen,
  transfer: TransferScreen,
  "add-money": AddMoneyScreen,
  success: SuccessScreen,
  airtime: AirtimeScreen,
  history: HistoryScreen,
  rewards: RewardsScreen,
  finance: FinanceScreen,
  cards: CardsScreen,
  profile: ProfileScreen,
  notifications: NotificationsScreen,
}

function Inner() {
  const { screen } = useApp()
  const Screen = SCREENS[screen] || HomeScreen
  return (
    <div className="w-[360px] min-h-[780px] bg-[#f2f3f5] rounded-[36px] overflow-hidden shadow-2xl flex flex-col relative">
      <Screen />
      <Toast />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#1c1c2e] flex justify-center items-start py-4">
      <AppProvider>
        <Inner />
      </AppProvider>
    </div>
  )
}
