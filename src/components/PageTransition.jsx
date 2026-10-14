export default function PageTransition({ children }) {
  return <main id="main-content" tabIndex={-1} className="route-page">{children}</main>
}
