ChopTestCase = new TestCase("Chop test Case");

ChopTestCase.prototype.testA = function() {
	assertEquals('t1', -1, chop(3, []));
	assertEquals('t2', -1, chop(3, [1]));
	assertEquals('t3', 0, chop(1, [1]));
	assertEquals('t4',0, chop(1, [1, 3, 5]));
	assertEquals('t5',1, chop(3, [1, 3, 5]));
	assertEquals('t6',2, chop(5, [1, 3, 5]));
	assertEquals('t7',-1, chop(0, [1, 3, 5]));
	assertEquals('t8',-1, chop(2, [1, 3, 5]));
	assertEquals('t9',-1, chop(4, [1, 3, 5]));
	assertEquals('t10',-1, chop(6, [1, 3, 5]));
	assertEquals('t11',0, chop(1, [1, 3, 5, 7]));
	assertEquals('t12',1, chop(3, [1, 3, 5, 7]));
	assertEquals('t13',2, chop(5, [1, 3, 5, 7]));
	assertEquals('t14',3, chop(7, [1, 3, 5, 7]));
	assertEquals('t15',-1, chop(0, [1, 3, 5, 7]));
	assertEquals('t16',-1, chop(2, [1, 3, 5, 7]));
	assertEquals('t17',-1, chop(4, [1, 3, 5, 7]));
	assertEquals('t18',-1, chop(6, [1, 3, 5, 7]));
	assertEquals('t19',-1, chop(8, [1, 3, 5, 7]));
};

ChopTestCase.prototype["test recursive chop"] = function() {
	assertEquals('t1', -1, recursive_chop(3, []));
	assertEquals('t2', -1, recursive_chop(3, [1]));
	assertEquals('t3', 0, recursive_chop(1, [1]));
	assertEquals('t4',0, recursive_chop(1, [1, 3, 5]));
	assertEquals('t5',1, recursive_chop(3, [1, 3, 5]));
	assertEquals('t6',2, recursive_chop(5, [1, 3, 5]));
	assertEquals('t7',-1, recursive_chop(0, [1, 3, 5]));
	assertEquals('t8',-1, recursive_chop(2, [1, 3, 5]));
	assertEquals('t9',-1, recursive_chop(4, [1, 3, 5]));
	assertEquals('t10',-1, recursive_chop(6, [1, 3, 5]));
	assertEquals('t11',0, recursive_chop(1, [1, 3, 5, 7]));
	assertEquals('t12',1, recursive_chop(3, [1, 3, 5, 7]));
	assertEquals('t13',2, recursive_chop(5, [1, 3, 5, 7]));
	assertEquals('t14',3, recursive_chop(7, [1, 3, 5, 7]));
	assertEquals('t15',-1, recursive_chop(0, [1, 3, 5, 7]));
	assertEquals('t16',-1, recursive_chop(2, [1, 3, 5, 7]));
	assertEquals('t17',-1, recursive_chop(4, [1, 3, 5, 7]));
	assertEquals('t18',-1, recursive_chop(6, [1, 3, 5, 7]));
	assertEquals('t19',-1, recursive_chop(8, [1, 3, 5, 7]));
};

ChopTestCase.prototype["test functional chop"] = function() {
	assertEquals('t1', -1, functional_chop(3, []));
	assertEquals('t2', -1, functional_chop(3, [1]));
	assertEquals('t3', 0, functional_chop(1, [1]));
	assertEquals('t4',0, functional_chop(1, [1, 3, 5]));
	assertEquals('t5',1, functional_chop(3, [1, 3, 5]));
	assertEquals('t6',2, functional_chop(5, [1, 3, 5]));
	assertEquals('t7',-1, functional_chop(0, [1, 3, 5]));
	assertEquals('t8',-1, functional_chop(2, [1, 3, 5]));
	assertEquals('t9',-1, functional_chop(4, [1, 3, 5]));
	assertEquals('t10',-1, functional_chop(6, [1, 3, 5]));
	assertEquals('t11',0, functional_chop(1, [1, 3, 5, 7]));
	assertEquals('t12',1, functional_chop(3, [1, 3, 5, 7]));
	assertEquals('t13',2, functional_chop(5, [1, 3, 5, 7]));
	assertEquals('t14',3, functional_chop(7, [1, 3, 5, 7]));
	assertEquals('t15',-1, functional_chop(0, [1, 3, 5, 7]));
	assertEquals('t16',-1, functional_chop(2, [1, 3, 5, 7]));
	assertEquals('t17',-1, functional_chop(4, [1, 3, 5, 7]));
	assertEquals('t18',-1, functional_chop(6, [1, 3, 5, 7]));
	assertEquals('t19',-1, functional_chop(8, [1, 3, 5, 7]));
};
