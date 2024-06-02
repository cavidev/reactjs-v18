import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Weather from "modules/weather/Weather";

// import Examples from "modules/examples/Examples";

function App() {
    return (
        <>
            {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="examples" element={<Dashboard />} />

                    {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="weather" element={<Weather />} />
                <Route path="examples" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/weather">Weather App</Link>
                    </li>
                    <li>
                        <Link to="/examples">Hooks Examples</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
            {/* <Header /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
