const AddJob = () => {
	return (
		<div className="p-7">
			<div className="space-y-2 text-center ">
				<h3 className="text-4xl">Post a New Job!</h3>
				<div className="text-2xl">Ready to jump back in?</div>
			</div>
			{/* <div className="flex flex-wrap ">
				<div className="lg:w-full pr-4 pl-4">
					<div className="ls-widget">
						<div className="tabs-box">
							<div className="widget-title">
								<h4>Post Job</h4>
							</div>
							<div className="widget-content">
								<div className="post-job-steps">
									<div className="step">
										<span className="icon flaticon-briefcase" />
										<h5>Job Detail</h5>
									</div>
									<div className="step">
										<span className="icon flaticon-money" />
										<h5>Package &amp; Payments</h5>
									</div>
									<div className="step">
										<span className="icon flaticon-checked" />
										<h5>Confirmation</h5>
									</div>
								</div>
								<form className="default-form">
									<div className="flex flex-wrap ">
										<div className="mb-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Job Title</label>
											<input type="text" name="name" placeholder="Title" />
										</div>
										<div className="mb-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Job Description</label><textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present" defaultValue={""} />
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Email Address</label><input type="text" name="name" placeholder />
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Username</label>
											<input type="text" name="name" placeholder />
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Specialisms </label><div className="basic-multi-select css-b62m3t-container"><span id="react-select-2-live-region" className="css-7pg0cj-a11yText" />
												<span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
												<div className="select__control css-13cymwt-control">
													<div className="select__value-container select__value-container--is-multi css-hlgwow">
														<div className="select__placeholder css-1jqq78o-placeholder" id="react-select-2-placeholder">Select...</div>
														<div className="select__input-container css-19bb58m" data-value><input className="select__input" autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" defaultValue style={{ color: 'inherit', background: '0px center', opacity: 1, width: '100%', gridArea: '1 / 2 / auto / auto', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }} aria-describedby="react-select-2-placeholder" />
														</div>
													</div>
													<div className="select__indicators css-1wy0on6">
														<span className="select__indicator-separator css-1u9des2-indicatorSeparator" /><div className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
														</div>
													</div>
												</div>
												<div>
													<input name="colors" type="hidden" defaultValue /></div>
											</div>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4"><label>Job Type</label>
											<select className="chosen-single form-select"><option>Select</option><option>Banking</option><option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Offered Salary</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>$1500</option>
												<option>$2000</option>
												<option>$2500</option>
												<option>$3500</option>
												<option>$4500</option>
												<option>$5000</option>
											</select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Career Level</label><select className="chosen-single form-select"><option>Select</option><option>Banking</option><option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Experience</label><select className="chosen-single form-select"><option>Select</option><option>Banking</option>
												<option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Gender</label><select className="chosen-single form-select"><option>Select</option><option>Male</option><option>Female</option><option>Other</option></select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Industry</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>Banking</option>
												<option>Digital &amp; Creative</option>
												<option>Retail</option>
												<option>Human Resources</option>
												<option>Management</option>
											</select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Qualification</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>Banking</option>
												<option>Digital &amp; Creative</option>
												<option>Retail</option>
												<option>Human Resources</option>
												<option>Management</option>
											</select>
										</div>
										<div className="mb-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Application Deadline Date</label><input type="text" name="name" placeholder="06.04.2020" />
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Country</label>
											<select className="chosen-single form-select">
												<option>Australia</option>
												<option>Pakistan</option>
												<option>Chaina</option>
												<option>Japan</option>
												<option>India</option>
											</select>
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>City</label>
											<select className="chosen-single form-select">
												<option>Melbourne</option><option>Pakistan</option><option>Chaina</option><option>Japan</option><option>India</option></select>
										</div>
										<div className="mb-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Complete Address</label><input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
										</div>
										<div className="mb-4 lg:w-1/2 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Find On Map</label><input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
										</div>
										<div className="mb-4 lg:w-1/4 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Latitude</label><input type="text" name="name" placeholder="Melbourne" />
										</div>
										<div className="mb-4 lg:w-1/4 pr-4 pl-4 md:w-full pr-4 pl-4">
											<label>Longitude</label><input type="text" name="name" placeholder="Melbourne" />
										</div>

										<div className="mb-4 lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4 text-right">
											<button className="theme-btn btn-style-one">Next</button>
										</div>
									</div>

								</form>
							</div>
						</div>
					</div></div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="ls-widget">
						<div className="tabs-box">
							<div className="widget-title">
								<h4>Post Job</h4>
							</div>
							<div className="widget-content">
								<div className="post-job-steps">
									<div className="step">
										<span className="icon flaticon-briefcase" />
										<h5>Job Detail</h5>
									</div>
									<div className="step">
										<span className="icon flaticon-money" />
										<h5>Package &amp; Payments</h5>
									</div>
									<div className="step">
										<span className="icon flaticon-checked" />
										<h5>Confirmation</h5>
									</div>
								</div>
								<form className="default-form">
									<div className="row">
										<div className="form-group col-lg-12 col-md-12">
											<label>Job Title</label>
											<input type="text" name="name" placeholder="Title" />
										</div>
										<div className="form-group col-lg-12 col-md-12">
											<label>Job Description</label><textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present" defaultValue={""} />
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Email Address</label><input type="text" name="name" placeholder />
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Username</label>
											<input type="text" name="name" placeholder />
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Specialisms </label><div className="basic-multi-select css-b62m3t-container"><span id="react-select-2-live-region" className="css-7pg0cj-a11yText" />
												<span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
												<div className="select__control css-13cymwt-control">
													<div className="select__value-container select__value-container--is-multi css-hlgwow">
														<div className="select__placeholder css-1jqq78o-placeholder" id="react-select-2-placeholder">Select...</div>
														<div className="select__input-container css-19bb58m" data-value><input className="select__input" autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" defaultValue style={{ color: 'inherit', background: '0px center', opacity: 1, width: '100%', gridArea: '1 / 2 / auto / auto', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }} aria-describedby="react-select-2-placeholder" />
														</div>
													</div>
													<div className="select__indicators css-1wy0on6">
														<span className="select__indicator-separator css-1u9des2-indicatorSeparator" /><div className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
														</div>
													</div>
												</div>
												<div>
													<input name="colors" type="hidden" defaultValue /></div>
											</div>
										</div>
										<div className="form-group col-lg-6 col-md-12"><label>Job Type</label>
											<select className="chosen-single form-select"><option>Select</option><option>Banking</option><option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Offered Salary</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>$1500</option>
												<option>$2000</option>
												<option>$2500</option>
												<option>$3500</option>
												<option>$4500</option>
												<option>$5000</option>
											</select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Career Level</label><select className="chosen-single form-select"><option>Select</option><option>Banking</option><option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Experience</label><select className="chosen-single form-select"><option>Select</option><option>Banking</option>
												<option>Digital &amp; Creative</option><option>Retail</option><option>Human Resources</option><option>Management</option></select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Gender</label><select className="chosen-single form-select"><option>Select</option><option>Male</option><option>Female</option><option>Other</option></select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Industry</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>Banking</option>
												<option>Digital &amp; Creative</option>
												<option>Retail</option>
												<option>Human Resources</option>
												<option>Management</option>
											</select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Qualification</label>
											<select className="chosen-single form-select">
												<option>Select</option>
												<option>Banking</option>
												<option>Digital &amp; Creative</option>
												<option>Retail</option>
												<option>Human Resources</option>
												<option>Management</option>
											</select>
										</div>
										<div className="form-group col-lg-12 col-md-12">
											<label>Application Deadline Date</label><input type="text" name="name" placeholder="06.04.2020" />
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Country</label>
											<select className="chosen-single form-select">
												<option>Australia</option>
												<option>Pakistan</option>
												<option>Chaina</option>
												<option>Japan</option>
												<option>India</option>
											</select>
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>City</label>
											<select className="chosen-single form-select">
												<option>Melbourne</option><option>Pakistan</option><option>Chaina</option><option>Japan</option><option>India</option></select>
										</div>
										<div className="form-group col-lg-12 col-md-12">
											<label>Complete Address</label><input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
										</div>
										<div className="form-group col-lg-6 col-md-12">
											<label>Find On Map</label><input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
										</div>
										<div className="form-group col-lg-3 col-md-12">
											<label>Latitude</label><input type="text" name="name" placeholder="Melbourne" />
										</div>
										<div className="form-group col-lg-3 col-md-12">
											<label>Longitude</label><input type="text" name="name" placeholder="Melbourne" />
										</div>
										
										<div className="form-group col-lg-12 col-md-12 text-right">
											<button className="theme-btn btn-style-one">Next</button>
										</div>
										</div>

								</form>
							</div>
						</div>
					</div></div>
			</div> */}
			<div className="p-20">
				<div className="post-job-steps">
					<div className="step">
						<span className="icon flaticon-briefcase" />
						<h5>Job Detail</h5>
					</div>
					<div className="step">
						<span className="icon flaticon-money" />
						<h5>Package &amp; Payments</h5>
					</div>
					<div className="step">
						<span className="icon flaticon-checked" />
						<h5>Confirmation</h5>
					</div>
				</div>
				<div className="flex flex-wrap">
					<form action="">
						<div>
							<label htmlFor="Company Name">Company Name</label> <br />
							<input
								type="text"
								className="border my-3"
								name="company_name"
								id=""
								placeholder="company_name" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddJob;