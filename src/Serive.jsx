
const Service = () => {


 const services = [
        {
            title: "HTML Tutorial",
            description: "Learn HTML from basic to advanced and build your first web page.",
            icon: "01"
        },
        {
            title: "CSS Tutorial",
            description: "Learn CSS styling and create beautiful, responsive websites.",
            icon: "02"
        },
        {
            title: "JavaScript Tutorial",
            description: "Learn JavaScript and make your websites interactive.",
            icon: "03"
        },
        {
            title: "React Tutorial",
            description: "Learn React components, props, hooks and modern development.",
            icon: "04"
        },
        {
            title: "Bootstrap Tutorial",
            description: "Create responsive websites using Bootstrap framework.",
            icon: "05"
        },
        {
            title: "Web Development",
            description: "Learn complete web development with practical projects.",
            icon: "06"
        },
            {
            title: "Data Science Development",
            description: "Learn complete web development with practical projects.",
            icon: "07"
        }
    ];


    return (

        <section className="py-5 bg-light">

            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">

                    <span className="badge bg-primary px-3 py-2 mb-3">
                        OUR SERVICES
                    </span>

                    <h2 className="display-5 fw-bold">
                        Explore Our Services
                    </h2>

                    <p className="text-secondary mt-3">
                        Improve your skills with our professional tutorials.
                    </p>

                </div>

                {/* Cards */}
                <div className="row g-4">
{/* 
                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-danger fs-6 mb-3">01</span>
                                <h4 className="fw-bold">HTML Tutorial</h4>
                                <p className="text-secondary">
                                    Learn HTML from basic to advanced and build your first web page.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-primary fs-6 mb-3">02</span>
                                <h4 className="fw-bold">CSS Tutorial</h4>
                                <p className="text-secondary">
                                    Learn CSS styling and create beautiful responsive websites.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-warning text-dark fs-6 mb-3">03</span>
                                <h4 className="fw-bold">JavaScript Tutorial</h4>
                                <p className="text-secondary">
                                    Learn JavaScript and make your websites interactive.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-info text-dark fs-6 mb-3">04</span>
                                <h4 className="fw-bold">React Tutorial</h4>
                                <p className="text-secondary">
                                    Learn React components, props and hooks.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-success fs-6 mb-3">05</span>
                                <h4 className="fw-bold">Bootstrap Tutorial</h4>
                                <p className="text-secondary">
                                    Create responsive websites using Bootstrap framework.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-dark fs-6 mb-3">06</span>
                                <h4 className="fw-bold">Web Development</h4>
                                <p className="text-secondary">
                                    Learn complete web development with practical projects.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div> */}



{
    services.map((val,i)=>{
console.log(val)
return (
<div className="col-lg-4 col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-4">
                                <span className="badge bg-danger fs-6 mb-3">{val.icon}</span>
                                <h4 className="fw-bold">{val.title}</h4>
                                <p className="text-secondary">
                                    {val.description}
                                </p>
                                <button className="btn btn-primary rounded-pill px-4">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>

)
    })
}
                </div>


<table className="table">

    <tr>
         <th>icon</th>
        <th>Title</th>
        <th>Description</th>
       
    </tr>

    {
        services.map((item,i)=>{
return (
    <tr>
        <td>{item.icon}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
    </tr>
)
        })
    }
</table>

            </div>

        </section>

    );

};

export default Service;
