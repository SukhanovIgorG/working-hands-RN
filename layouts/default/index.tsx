import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
