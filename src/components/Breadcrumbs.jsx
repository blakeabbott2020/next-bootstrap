import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"
import Container from "react-bootstrap/Container"
import Breadcrumb from "react-bootstrap/Breadcrumb"

export default function Breadcrumbs() {
    const router = useRouter();

    const breadcrumbs = React.useMemo(function generateBreadcrumbs() {
        const asPathWithoutQuery = router.asPath.split("?")[0]
        const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0)

        const crumbs = asPathNestedRoutes.map((subpath, index) => {
            const href = "/" + asPathNestedRoutes.slice(0, index + 1).join("/")
            return { href, text: subpath }
        })


        return [{ href: "/", text: "Home" }, ...crumbs]
    }, [router.asPath])

    return (
        <Container>
            <Breadcrumb className="my-3">
                {breadcrumbs.map((crumb, index) => (
                    <Crumb key={index} {...crumb} last={index === breadcrumbs.length - 1} />
                ))}
            </Breadcrumb>
        </Container>
    )
}

function Crumb({ text, href, last = false }) {
    if (last) return (<Breadcrumb.Item>{text}</Breadcrumb.Item>)

    return (
        <Link href={href} passHref>
            <Breadcrumb.Item >{text}</Breadcrumb.Item>
        </Link>
    )
}